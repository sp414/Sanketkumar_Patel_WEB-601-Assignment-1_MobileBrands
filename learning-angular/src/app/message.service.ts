import { Injectable } from '@angular/core';
import { MessageList } from './messages/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: MessageList[] = [];

  add(message: string) {
    this.messages.push(
      {
        message: message
      }
    );
  }

  clear() {
    this.messages = [];
  }

  getMessages() {
    return this.messages;
  }
  
}
