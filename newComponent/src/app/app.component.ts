import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  simplePlan: string = 'Simples';
  simplePlanPrice: number = 100;
  simplePlanStyle: string = 'orange'

  fullPlan: string = 'Completo'
  fullPlanPrice: number = 200;
  fullPlanStyle: string = 'purple'

  name: string = 'Franz Blauth';

  onCardSimpleButtonClicked() {
    console.log("chamada da API Simple Plan")
  }

  onCardFullButtonClicked() {
    console.log("chamada da API Full Plan")
  }

  handleInputChange(event: string) {
    console.log(event)
    this.name = event;
  }
}
