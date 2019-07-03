import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../messages.service';

// https://bootsnipp.com/snippets/qrO6B
@Component({
  selector: 'app-view-messages',
  templateUrl: './view-messages.component.html',
  styleUrls: ['./view-messages.component.css']
})
export class ViewMessagesComponent implements OnInit {

  messages: Array<any>;

  constructor(private service: MessagesService) { 
    this.messages = new Array<string>();
    const d = new Date();
    this.service.getMessage((msg: string) => {
      this.messages.push({
        msg: msg,
        time: `${d.getHours()}:${d.getMinutes()}`
      })
    });
  }

  ngOnInit() {
  }

}
