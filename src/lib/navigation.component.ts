import { Component, OnInit } from '@angular/core';
import { NavigationService } from "./navigation.service";
import { INavigationState } from "./navigation.interfaces";

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.less']
})
export class NavigationComponent implements OnInit {

  public states: INavigationState[] = [];

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
    this.navigation.states$.subscribe(s => this.states = s ?? [])
  }

  goto(state: INavigationState) {
    this.navigation.goto(state);
  }

}
