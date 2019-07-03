import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

// ngx-socket-io has a bug solved here:
// https://github.com/socketio/socket.io-client/issues/1166

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private socket: Socket) { }

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }

  getMessage(callback) {
    this.socket.on('response', callback)
  }
}
