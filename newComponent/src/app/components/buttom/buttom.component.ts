import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttom',
  templateUrl: './buttom.component.html',
  styleUrl: './buttom.component.scss'
})
export class ButtomComponent {
  @Input({ required: true }) buttonText: string = '';
  @Input() buttonStyle: 'white' | 'purple' = 'white'
}
