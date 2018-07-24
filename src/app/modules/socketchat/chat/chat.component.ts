import {Component, OnDestroy, OnInit} from '@angular/core';
import {ChatService} from '../../../services/socketchat/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  messages: any = [];
  message: string;
  connection: any;
  username: string;
  alert: any = false;

  constructor(private _chatService: ChatService) { }

  sendMessage() {
    this._chatService.sendMessage(this.message, this.username);
    this.message = '';
  }


  ngOnInit() {
    this.connection = this._chatService.getMessages().subscribe(message => {
      console.log(message);
      this.messages.push(message);
    });
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  setUsername() {
    this._chatService.setUsername(this.username);
    this.alert = 'Username is set';
  }
}
