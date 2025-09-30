import { NgModule } from "@angular/core";
import { CardComponent } from "./card/card.component";
import { ButtomComponent } from "./buttom/buttom.component";

@NgModule({
  declarations: [
    ButtomComponent,
    CardComponent 
  ],
  exports: [
    ButtomComponent,
    CardComponent 
  ]
})

export class ComponentsModule { }