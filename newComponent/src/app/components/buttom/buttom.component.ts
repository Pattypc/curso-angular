import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrl: './buttom.component.scss'
})
export class ButtomComponent {
  @Input({ required: true })
   buttonText: string = '';
  
   @Input()
   buttonStyle: 'white' | 'purple' = 'white'

   @Input()  
   isDisabled: boolean = false;

   @Output('clicked') butttonClickedEmitter = new EventEmitter<void>();

  onButtonClicked() {
    this.butttonClickedEmitter.emit();
    console.log('Button sum recived clicked!');
  }
}
