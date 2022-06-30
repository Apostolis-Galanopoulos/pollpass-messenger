import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { ChatService } from '../services/chat.service';

import { SocketService } from './socket.service';

describe('SocketService', () => {
  let service: SocketService;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ChatService', ['messages', 'handleMessage']);
    const spyStore = jasmine.createSpyObj('ChatService', ['messages', 'handleMessage']);
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        { provide: ChatService, useValue: spy },
        { provide: Store, useValue: spyStore }
      ]
  });
    service = TestBed.inject(SocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
