import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  personSelectedIndex: number | undefined;
  listPeople = [
    { name: 'Franz Blauth', age: 58 },
    { name: 'Patricia Chieppe', age: 52 },
    { name: 'Vitor Blauth', age: 23 },
    { name: 'Aline Blauth', age: 21 }
  ];

  selectPerson(index: number) {
    this.personSelectedIndex = index;
  }
}
