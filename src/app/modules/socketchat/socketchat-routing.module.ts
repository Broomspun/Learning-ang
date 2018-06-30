import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatComponent} from './chat/chat.component';
import {SocketchatComponent} from './socketchat.component';

const routes: Routes = [
  {
    path: 'chat',
    component: SocketchatComponent,
    children: [
      {
        path: '',
        component: ChatComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocketchatRoutingModule { }
