import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../models/video';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input()
  private video: Video;

  constructor() { }

  ngOnInit() {

  }

}
