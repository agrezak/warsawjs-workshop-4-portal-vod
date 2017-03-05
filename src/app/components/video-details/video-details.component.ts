import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video';

// import { Observable } from 'rxjs';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css'],
  providers: [VideoService]
})

export class VideoDetailsComponent implements OnInit {

  public video: Video;
  // public video: Observable<Video>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private videoService: VideoService,
  ) { }

  ngOnInit() {

    this.activatedRoute.params
      .map((params: any) => params.videoId)
      .switchMap(id => this.videoService.getElement(id))
      .subscribe(video => {
        this.video = video;
      });

    console.log(this);

    // this.activatedRoute.params.subscribe((params: Params) => {
    //   let videoId = params['videoId'];
    //   this.getVideo(videoId);
    // });
  }

}
