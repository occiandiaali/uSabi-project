import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { NgFor } from '@angular/common';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, NgFor],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  videos: any;

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.videoService
      .getVideos()
      .subscribe((response) => (this.videos = response));
  }
}
