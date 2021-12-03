import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeAddresComponent } from './home-addres.component';



@NgModule({
  declarations: [
    HomeAddresComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeAddresComponent
  ]
})
export class HomeAddresModule { }
