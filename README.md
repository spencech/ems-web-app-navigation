# Navigation

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.0.

## Module Implementation

	import { NgModule } from '@angular/core';
	import { BrowserModule } from '@angular/platform-browser';
	import { CommonModule } from '@angular/common';  

	import { AppComponent } from './app.component';
	import { NavigationModule, NavigationService } from "ems-web-app-navigation";
	import { PageViewerModule, PageViewerService } from "ems-web-app-page-viewer"; //necessary dependency

	@NgModule({
	  declarations: [
	    AppComponent
	  ],
	  imports: [
	    BrowserModule,
	    CommonModule,
	    NavigationModule,
	    PageViewerModule
	  ],
	  providers: [ NavigationService, PageViewerService ],
	  bootstrap: [ AppComponent ]
	})
	export class AppModule { }
