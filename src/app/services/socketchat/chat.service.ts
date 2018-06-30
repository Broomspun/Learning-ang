import { Injectable } from '@angular/core';
import * as io from 'node_modules/socket.io-client';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private url = 'https://lit-plateau-51117.herokuapp.com/';
  private socket: any;

  sendMessage(message: string, username: string) {
    this.socket.emit('add-message', message, username);
  }

  getMessages() {
    const observable = new Observable((observer: any) => {
      this.socket = io(this.url);
      this.socket.on('message', (data: any) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getUsername() {
    return sessionStorage.getItem('username');
  }

  setUsername(username: string) {
    sessionStorage.setItem('username', username);
  }

  constructor() { }
}
