import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18nSelect
  public name: string = 'Alex';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Carmen';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[] = ['Carmen','Jagger', 'Moreno','Neko', 'Meowth'];
  public clientsMap = { 
    '=0': 'no tenemos clientes esperando.',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift();
  }

  public person = {
    name: 'Alex',
    age: 37,
    adress: 'Valencia, Spain'
  }
}