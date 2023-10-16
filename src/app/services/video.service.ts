import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  // private url = 'https://fakestoreapi.com/products?limit=5';
  private url =
    'https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json';

  constructor(private httpClient: HttpClient) {}

  getVideos() {
    return this.httpClient.get(this.url);
  }
}
