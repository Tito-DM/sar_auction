import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SocketService } from "../socket.service";
import { AuctionService } from "../auction.service";
import { SigninService } from "../signin.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse,
} from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { Item } from "../item";
import { Chat } from "../chat";
import { User } from "../user";
import { Marker } from "../marker";
import { SoldItem } from "../soldItem";

@Component({
  selector: "app-auction",
  templateUrl: "./auction.component.html",
  styleUrls: ["./auction.component.css"],
})
export class AuctionComponent implements OnInit {
  items: Item[]; //array of items to store the items.
  users: User[];
  soldItem: object;
  messageSender: string;
  displayedColumns: string[]; //Array of Strings with the table column names
  message: string; // message string
  showBid: boolean; //boolean to control if the show bid form is placed in the DOM
  showMessage: boolean; //boolean to control if the send message form is placed in the DOM
  selectedItem!: Item; //Selected Item
  bidForm!: FormGroup; //FormGroup for the biding
  userName!: string;
  errorMessage: string; //string to store error messages received in the interaction with the api
  mapOptions: google.maps.MapOptions;
  soldHistory: string[];
  messages: object[];
  markers: Marker[]; //array to store the markers for the looged users posistions.
  centerLat: number;
  centerLong: number;
  showRemove: boolean;
  showSubmitBit: boolean;
  deleteItemUrl: string;
  formControl: boolean;
  counter: number;
  leftTime: number;
  showSenderMessage: boolean;
  status: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private socketservice: SocketService,
    private auctionservice: AuctionService,
    private signinservice: SigninService,
    private http: HttpClient
  ) {
    this.deleteItemUrl = "/api/items/removeitem";
    this.items = [];
    this.messageSender = "";
    this.status = "";
    this.users = [];
    this.soldItem = {};
    this.formControl = false;
    this.soldHistory = [
      "No items were sold.",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
    ];
    this.messages = [];
    this.counter = 0;
    this.message = "";
    this.showBid = false;
    this.showMessage = false;
    this.userName = this.signinservice.token.username;
    this.errorMessage = "";
    this.showSenderMessage = false;
    this.displayedColumns = [
      "description",
      "currentbid",
      "buynow",
      "remainingtime",
      "wininguser",
      "owner",
    ];
    this.centerLat = 0;
    this.centerLong = 0;
    this.markers = [];
    this.showRemove = false;
    this.showSubmitBit = false;
    this.leftTime = 0;
    this.mapOptions = {
      center: { lat: this.centerLat, lng: this.centerLong },
      zoom: 10,
    };
  }

  ngOnInit(): void {
    this.message =
      "Hello " + this.userName + "! Welcome to the SAR auction site.";

    //create bid form
    this.bidForm = this.formBuilder.group({
      bid: [
        "",
        Validators.compose([
          Validators.required,
          Validators.pattern("^[0-9]*$"),
        ]),
      ],
      message: [""],
    });

    // Get initial item data from the server api using http call in the auctionservice
    this.auctionservice.getItems().subscribe({
      next: (result) => {
        let receiveddata = result as Item[]; // cast the received data as an array of items (must be sent like that from server)
        this.items = receiveddata;

        console.log(
          "getItems Auction Component -> received the following items: ",
          receiveddata
        );
      },
      error: (error) => (this.errorMessage = <any>error),
    });

    //  Possibily getUsers to show in googleMaps using get users API call for server? Implies changing auction.service.ts to define a new HTTP call

    //subscribe to the incoming websocket events

    //example how to subscribe to websocket events in this case the update:items event that is sent every second
    this.socketservice.getEvent("update:items").subscribe((data) => {
      let receiveddata = data as Item[];
      if (this.items) {
        this.items = receiveddata;
      }
    });

    this.socketservice.getEvent("sold:item").subscribe((data) => {
      let receiveddata = data as SoldItem;

      if (this.soldHistory) {
        if (receiveddata.winner) {
          this.soldHistory[this.counter] = receiveddata.description.toString();
          this.counter++;
        }
      }
    });

    this.socketservice.getEvent("error:message").subscribe((data) => {
      let receiveddata = data as string;
      this.message = receiveddata;
    });

    this.socketservice.getEvent("receive:message").subscribe((data) => {
      let receiveddata = data as Chat;
      if (this.messages) {
        this.messages.push(receiveddata);
        this.showSenderMessage = true;
      }
    });

    //subscribe to the an event sent by the server for each item that ends.
    //subscribe to an event sent by the the server when a user sends a message
    //subscribe to any other events that you create

    //subscribe to the item sold event sent by the server for each item that ends.

    //subscription to any other events must be performed here inside the ngOnInit function
  }

  /**
   * Handle Http operation that failed.
   */
  private handleError(error: HttpErrorResponse) {
    let errMsg: string;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errMsg = error.error.message ? error.error.message : error.toString();
      console.error(errMsg);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errMsg = error.status + " - " + error.statusText;
      console.error(errMsg);
    }
    return throwError(() => new Error(errMsg));
  }

  logout() {
    //call the logout function in the signInService to clear the token in the browser
    this.signinservice.logout(); // must be done first so that the token is erased does not allow socket automatic reconnection
    //perform any needed logout logic here
    this.socketservice.disconnect();
    //navigate back to the log in page
    this.router.navigate(["/signin"]);
  }

  //function called when an item is selected in the view
  onRowClicked(item: Item) {
    console.log("Selected item = ", item);
    this.selectedItem = item;
    this.showBid = true; // makes the bid form appear

    //For now all buttons are shown fix this!
    //this.showRemove = true; // should only appear when the user is the owner of the selected item
    this.showMessage = true; //should only appear when the user is NOT the owner of the selected item

    //check if the user is the owner of the item
    this.userName !== item.owner
      ? (this.showRemove = false)
      : (this.showRemove = true);
    //show the submit bit button only if the user is not the owner of the item
    this.userName === item.owner
      ? (this.showSubmitBit = false)
      : (this.showSubmitBit = true);
  }

  // function called when the submit bid button is pressed
  submit() {
    console.log("submitted bid = ", this.bidForm.value.bid);
    //send an event using the websocket for this use the socketservice
    // example :  this.socketservice.sendEvent('eventname',eventdata);
    this.socketservice.sendEvent("send:bid", {
      newBid: this.bidForm.value.bid,
      itemData: this.selectedItem,
      userName: this.userName,
    });
  }
  //function called when the user presses the Send message button
  sendMessage() {
    console.log("Sending message to = ", this.selectedItem.owner);
    console.log("Message  = ", this.bidForm.value.message);
    //send an event using the websocket for this use the socketservice
    // example :  this.socketservice.sendEvent('eventname',eventdata);
    //eventdata can be an object of the chat type.
    this.socketservice.sendEvent("send:message", {
      message: this.bidForm.value.message,
      sender: this.userName,
      receiver: this.selectedItem.owner,
    });
  }

  //function called when the cancel bid button is pressed.
  cancelBid() {
    this.bidForm.reset(); //clears bid value
  }

  //function called when the buy now button is pressed.
  buyNow() {
    console.log("buying now", this.selectedItem.buynow);

    this.bidForm.setValue({
      /// sets the field value to the buy now value of the selected item
      bid: this.selectedItem.buynow,
      message: "",
    });

    this.message =
      this.userName +
      " please press the Submit Bid button to procced with the Buy now order.";
  }

  //function called when the remove item button is pressed.
  removeItem() {
    //call the HTTP call removeItem in the auctionservice and subscribe to the result
    this.auctionservice.removeItem(this.selectedItem).subscribe({
      next: (result) => {
        if (result) {
          //remove the item from the items array in UI
          this.items = this.items.filter(
            (item) => item._id !== this.selectedItem._id
          );
        }
        console.log(
          "removeItem Auction Component -> received the following result: ",
          result
        );
      },
    });

    //send an event using the websocket for this use the socketservice
  }
}
