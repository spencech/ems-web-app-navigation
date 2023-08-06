import { NgModule } from '@angular/core';
import { NavigationComponent } from './navigation.component';
import { PageViewerService } from "ems-web-app-page-viewer";
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavigationComponent
  ],
  providers: [
    PageViewerService
  ]
})
export class NavigationModule { }
