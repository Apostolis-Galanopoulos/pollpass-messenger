import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor () { }

  getSession (name: string): string {
    return sessionStorage.getItem(name) as string;
  }

  setSession (name: string, value: string): void {
    sessionStorage.setItem(name, value);
  }
}
