import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputText = "Você não pode digitar"
  inputType = "Text"
  isDisabled = true

  enableInput() {
    this.isDisabled = false
    this.inputText = "Digite agora"
  }

  disableInput() {
    this.isDisabled = true
    this.inputText = "Você não pode digitar"
  }
}
