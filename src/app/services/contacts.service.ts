import { Injectable } from '@angular/core';
import {Contact} from "../entity/Contact";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Contact[] = [
    {id: 123456, clientName: 'Yennefer', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 134567, clientName: 'Boris', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 145678, clientName: 'Victoria', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 156789, clientName: 'Triss', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 167890, clientName: 'Carl', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 178901, clientName: 'Ciri', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 189012, clientName: 'John', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 190123, clientName: 'Geralt', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 101234, clientName: 'Lambert', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 112345, clientName: 'Eskel', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 113456, clientName: 'Vessemir', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 114567, clientName: 'John', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 115678, clientName: 'Leo', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 116789, clientName: 'Victoria', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 117890, clientName: 'John', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 118901, clientName: 'Luytik', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
    {id: 119012, clientName: 'Sianna', TRN_PPSN: 654321, yearEnd: new Date(2022, 6, 23), ARD: new Date(2022, 6, 23), companyNumber: 123456789, email: 'email1234@gmail.com', phoneNumber: 7674822811, companyAddress: '10 Comp street, h. 2, fl. 4'},
  ]
  private contactsCopy: Contact[]

  constructor() {
    this.contactsCopy = this.contacts
  }

  getContacts() {
    return this.contacts
  }

  filterContacts(name: string) {
    let filterResult = this.contactsCopy.filter(contact => contact.clientName.toLowerCase() === name.toLowerCase() )
    if (filterResult.length !== 0)
      this.contacts = filterResult
    else
      this.refreshContacts()
  }

  refreshContacts() {
    this.contacts = this.contactsCopy
  }

  addContact(contact: Contact) {
    this.contacts.unshift(contact)
  }

  editContact(id: number) {
    this.contacts.filter(contact => {
      console.log(this.contacts.filter(contact => contact.id == id))
      return contact !== this.contacts.filter(contact => contact.id == id)[0]
    })
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter(contact => contact !== this.contacts.filter(contact => contact.id == id)[0]);
  }
}
