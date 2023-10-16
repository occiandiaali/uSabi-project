import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  private url = 'https://fakestoreapi.com/products?limit=5';

  constructor(private httpClient: HttpClient) {}

  getVideos() {
    return this.httpClient.get(this.url);
  }
}
