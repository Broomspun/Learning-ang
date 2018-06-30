import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocketchatRoutingModule } from './socketchat-routing.module';
import { SocketchatComponent } from './socketchat.component';
import { ChatComponent } from './chat/chat.component';
import {FormsModule} from '@angular/forms';
import {ChatService} from '../../services/socketchat/chat.service';

@NgModule({
  imports: [
    CommonModule,
    SocketchatRoutingModule,
    FormsModule
  ],
  declarations: [SocketchatComponent, ChatComponent],
  providers: [ChatService]
})
export class SocketchatModule { }
