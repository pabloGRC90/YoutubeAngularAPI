import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoSearchComponent } from './video-search/video-search.component';
import { VideoComponent } from './video.component';



@NgModule({
  declarations: [
    VideoListComponent,
    VideoSearchComponent,
    VideoComponent

  ],
  imports: [
    CommonModule
  ]
})
export class VideoModule { }
