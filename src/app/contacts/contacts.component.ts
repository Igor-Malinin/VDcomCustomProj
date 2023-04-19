import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Contact} from "../entity/Contact";
import {ContactsService} from "../services/contacts.service";
import {CommunicationService} from "../services/communication.service";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements AfterContentChecked {

  addToggle: boolean = false
  errorToggle: boolean = false
  newContact: Contact = new Contact();
  pageIndex: number = 0

  constructor(
    private contactsService: ContactsService,
  ) { }

  ngAfterContentChecked() { }

  addNewContact() {
    let contact: Contact = {...this.newContact}
    const inputsCollection: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('.input-new-client')
    for (let i = 0; i < inputsCollection.length; i++) {
      if(inputsCollection[i].value === '') {
        this.errorToggle = true
        break
      }
      this.errorToggle = false
    }
    if (!this.errorToggle) {
      this.contactsService.addContact(contact)
      this.errorToggle = false
    }
  }

  checkAll() {
    const mainCheckbox =
      <HTMLInputElement>document.querySelector('.main-checkbox')
    const checkboxCollection: NodeListOf<HTMLInputElement> =
      document.querySelectorAll('.row-checkbox')
    mainCheckbox.checked ?
      checkboxCollection.forEach(checkbox =>
        checkbox.checked = true) :
      checkboxCollection.forEach(checkbox =>
        checkbox.checked = false)
  }

  getContacts(pageIndex: number) {
    const contacts = []
    const lengthContacts = this.contactsService.getContacts().length
    if(pageIndex < lengthContacts) {
      for (let i = 0; i < 8; i++) {
        if (this.contactsService.getContacts()[i + (pageIndex * 8)])
          contacts.push(this.contactsService.getContacts()[i + (pageIndex * 8)])
        else
          break
      }
    }
    return contacts
  }

  getAmountOfPages() {
    // округляем всегда вверх, т.к. даже если чуть чуть выше, значит нужна доп. страница
    return Array(Math.ceil(this.contactsService.getContacts().length/8))
  }

  editContact(contactId: number) {
    this.contactsService.editContact(contactId)
  }

  deleteContact(contactId: number) {
    this.contactsService.deleteContact(contactId)
  }

}
