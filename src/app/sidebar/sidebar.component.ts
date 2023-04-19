import {Component, OnInit} from '@angular/core';
import {CommunicationService} from "../services/communication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private activeComp: string = 'contacts'

  constructor(
    private comService: CommunicationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.comService.setComponent(this.activeComp)
  }

  activeComponent(component: string) {
    this.comService.setComponent(component)
    this.activeComp = component
  }

  logout() {
    this.comService.showSidebar(false)
    this.router.navigate(['/'])
  }

  getActiveComp() {
    return this.activeComp
  }

}
