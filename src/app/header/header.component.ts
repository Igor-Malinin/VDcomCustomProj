import {AfterContentChecked, Component, HostListener} from '@angular/core';
import {CommunicationService} from "../services/communication.service";
import {ContactsService} from "../services/contacts.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements AfterContentChecked {

  burgerToggle: boolean = true
  name: string = ''
  private showBurger: boolean = false
  private showSide: boolean = false

  constructor(
    private comService: CommunicationService,
    private contactsService: ContactsService
  ) { }

  ngAfterContentChecked() {
    this.showBurger = this.comService.getBurger()
  }

  @HostListener('window:resize')
  dropToggle() {
    this.burgerToggle = true
    this.showSide = false
  }

  getBurger() {
    return this.showBurger
  }

  showSidebar() {
    this.showSide = !this.showSide
    this.comService.showSidebar(this.showSide)
  }

  searchByName() {
    this.contactsService.filterContacts(this.name)
  }
}
