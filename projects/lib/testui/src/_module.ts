import { NgModule } from "@angular/core";
import { TestButtonComponent } from "./component/testbutton.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';

const MATERIAL=[
  MatNativeDateModule,
  MatMenuModule
]

const COMPONENT=[
  TestButtonComponent
]

@NgModule({
  imports:[...MATERIAL,
    BrowserAnimationsModule],
  declarations:[...COMPONENT],
  exports:[...COMPONENT]
})
export class TestComponentModule{

}
