import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // text: string = 'Felipe';
  pessoa = { name: 'Felipe', status: 1 };
  pesso2 = { name: 'Matheus', status: 2 };
  pesso3 = { name: 'Luis', status: 3 };
}
