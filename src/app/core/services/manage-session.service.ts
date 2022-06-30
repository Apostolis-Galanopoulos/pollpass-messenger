import { Injectable } from '@angular/core';
import { USER_SESSION } from '../constants/constants';
import { SessionStorageService } from '../storage/session-storage.service';
import { uuIdv4 } from '../utils/uuidv4';

@Injectable({
  providedIn: 'root'
})
export class ManageSessionService {

  constructor (
    private readonly sessionStorageService: SessionStorageService
  ) {
    if (!this.sessionStorageService.getSession(USER_SESSION)) {
      this.sessionStorageService.setSession(USER_SESSION, uuIdv4());
    }
   }
}
