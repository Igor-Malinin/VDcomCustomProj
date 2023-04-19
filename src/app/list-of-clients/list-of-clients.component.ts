import {AfterContentChecked, Component, HostListener} from '@angular/core';
import {CommunicationService} from "../services/communication.service";

@Component({
  selector: 'app-list-of-clients',
  templateUrl: './list-of-clients.component.html',
  styleUrls: ['./list-of-clients.component.css']
})
export class ListOfClientsComponent implements AfterContentChecked {

  private activeComp: string = ''
  private wideScreen: boolean = true
  private windowInnerWidth = 0
  private showSide = false

  constructor(
    private comService: CommunicationService
  ) { }

  ngAfterContentChecked() {
    this.activeComp = this.comService.getComponent()
    this.showSide = this.comService.getSidebar()
  }

  getActiveComp() {
    return this.activeComp
  }

  @HostListener('window:load')
  @HostListener('window:resize')
  onLoadResize() {
    this.windowInnerWidth = window.innerWidth
    this.comService.showSidebar(false)
    if (this.windowInnerWidth < 1000) {
      this.wideScreen = false
      this.comService.showBurger(true)
    }
    else {
      this.wideScreen = true
      this.comService.showBurger(false)
    }
  }

  getWideScreen() {
    if (!this.showSide)
      return !this.wideScreen
    return !this.showSide
  }

}
