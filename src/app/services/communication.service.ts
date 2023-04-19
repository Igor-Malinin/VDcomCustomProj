import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private component: string = ''
  private showBurg: boolean = false
  private showSide: boolean = false
  constructor() { }

  showBurger(state: boolean) {
    this.showBurg = state
  }

  showSidebar(state: boolean) {
    this.showSide = state
  }

  setComponent (component: string) {
    this.component = component
  }

  getComponent () {
    return this.component
  }

  getBurger() {
    return this.showBurg
  }

  getSidebar() {
    return this.showSide
  }
}
