import { CommonModule } from '@angular/common';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { environment } from '@environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ManageSessionService } from './services/manage-session.service';
import { messageReducer } from './state/reducers/pm.reducer';
import { SocketService } from './web-socket/socket.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ 'messages': messageReducer}),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      deps: [ManageSessionService, SocketService],
      useFactory: (_m: ManageSessionService, socket: SocketService) => () => { socket.connect(); },
      multi: true
    },
  ],
})
export class CoreModule { }
