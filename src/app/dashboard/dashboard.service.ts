import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Track } from './models/track';
import { DashboardCards } from './dashboard-cards.enum';
import { Item } from './models/item';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  defaultState: Array<Track> = [];
  private subject = new BehaviorSubject<Track[]>(this.defaultState);
  tracks$ = this.subject.asObservable();

  constructor() {
    this.defaultState = [
      {
        items: [
          {
            component: DashboardCards.HELLO_WORLD,
            id: 'hello-world',
          },
        ],
      },
      {
        items: [
          {
            component: DashboardCards.HELLO_WORLD_TWO,
            id: 'hello-world-2',
          },
        ],
      },
    ];

    this.subject.next(this.defaultState);

    this.loadTracksFromStorage();

    this.tracks$.subscribe(() => {
      this.saveTracksToStorage();
    });
  }

  setState = (tracks: Array<Track>) => {
    this.subject.next(tracks);
  };

  addItem = (item: Item) => {
    const state = this.subject.getValue();

    if (state[0].items.indexOf(item) !== -1 || state[1].items.indexOf(item) !== -1) {
      console.warn('Item with the same id exists on the dashboard.');
      return;
    }

    state[0].items.length <= state[1].items.length ? state[0].items.push(item) : state[1].items.push(item);

    this.subject.next(state);
  };

  removeItem = (item: Item) => {
    const state = this.subject.getValue();
    state.forEach(track => {
      track.items.forEach((i, index) => {
        if (i === item) {
          track.items.splice(index, 1);
        }
      });
    });

    this.subject.next(state);
  };

  loadTracksFromStorage = () => {
    const tracks = JSON.parse(localStorage.getItem('tracks') as string);
    if (tracks) {
      this.subject.next(tracks);
    }
  };

  saveTracksToStorage = () => {
    const state = this.subject.getValue();
    localStorage.setItem('tracks', JSON.stringify(state));
  };
}
