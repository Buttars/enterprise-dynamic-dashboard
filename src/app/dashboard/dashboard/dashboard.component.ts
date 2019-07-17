import { Component, OnInit } from '@angular/core';
import { Track } from '../models/track';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  tracks: Array<Track> = [
    {
      items: [],
    },
    {
      items: [],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
