import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Video } from '../models/video';
import { Observable } from 'rxjs';
import 'rxjs/Rx';


@Injectable()
export class VideoService {

  private jsonPath: string = '/assets/search.json';

  constructor(private http: Http) { }

  search(): Observable<Video[]> {
    return this.http.get(this.jsonPath)
      .map(res => {
        let data = res.json();
        return data.items
          .filter(value => value.id.videoId)
          .map(value => {
          let el:Video = {
            id: value.id.videoId,
            description: value.snippet.description,
            thumb: value.snippet.thumbnails.high.url,
            title: value.snippet.title
          };
          return el;
        });
      })
  }

  getElement(id): Observable<Video> {
    return this.search()
      .map(videos => {
        return videos.filter(video => {
          return video.id === id
        })
      })
      .map(videos => videos[0])
  }

}
