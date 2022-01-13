import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoSearchComponent } from './video-search/video-search.component';


const routes: Routes = [
  {
    path: 'video-search',
    component: VideoSearchComponent,
  },

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule {}
