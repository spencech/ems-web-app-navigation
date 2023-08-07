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
  private page:any;
  private pageService: any;

  constructor() {
    
  }

  public setPageService(pageService: any) {
    this.pageService = pageService;
    this.pageService.page.subscribe((p: any) => this.page = p);
  }

  public removeState(id: string) {
    const state = this.list.find(s => s.id === id);
    if(!state) return;
    const index = this.list.indexOf(state);
    this.list.splice(index,1);
    this.states.next(this.list.concat());
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

  public goto(input: INavigationState | string) {
    let state?: INavigationState
    
    if(typeof input === "string") {
      state = this.list.find(s => s.id === input);
    }  else {
      state = input as INavigationState;
    }

    if(!state) return;

    const index = this.list.indexOf(state);
    this.list.splice(index + 1);
    this.states.next(this.list.concat());

    if(state.page === this.page) state.callback(state);
    else this.pageService.setCurrentPage(state.page,state.state);
  }
}