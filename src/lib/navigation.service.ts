import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, throwError, of } from 'rxjs';
import { INavigationState } from "./navigation.interfaces";

@Injectable({
   providedIn: 'root'
})
export class NavigationService {

  private states: BehaviorSubject<INavigationState[]> = new BehaviorSubject<INavigationState[]>([]);
  public states$: Observable<INavigationState[]> = this.states.asObservable();

  private list: INavigationState[] = [];
  private page: any;

  constructor() {
    //this.pageService.page.subscribe(p => this.page = p as Page);
  }

  public setCurrentPage(page: any) {
    this.page = page;
  }

  public add(state: INavigationState) {
    const existing = this.list.find(s => s.id === state.id);

    if(existing) {
      const index = this.list.indexOf(existing);
      this.list.splice(index,1,state);
    }
    else {
      this.list.push(state);
    }

    this.states.next(this.list.concat());
  }

  public goto(state: INavigationState) {
    const index = this.list.indexOf(state);
    this.list.splice(index + 1);
    this.states.next(this.list.concat());

    if(state.page === this.page) state.callback(state);
    else this.pageService.setCurrentPage(state.page,state.state);
  }
}