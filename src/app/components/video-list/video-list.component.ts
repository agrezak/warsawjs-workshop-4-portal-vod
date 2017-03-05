import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Video } from '../../models/video';
import { Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoPlayerComponent } from '../video-player/video-player.component';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  private video: Video;
  private videos: Observable<Video[]>;
  private searchFor: string;

  constructor(
    private videoService: VideoService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.videos = this.videoService.search();

    // this.videoService.search().subscribe(videos =>  {
    //   this.videos = videos;
    // });
  }

  onVideoClick(video: Video) {
    const modalRef = this.modalService.open(VideoPlayerComponent);
    modalRef.componentInstance.video = video;
  }

}
