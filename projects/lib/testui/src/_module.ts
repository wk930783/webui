import { NgModule } from "@angular/core";
import { TestButtonComponent } from "./component/testbutton.component";
const COMPONENT=[
  TestButtonComponent
]

@NgModule({

  imports:[],
  declarations:[...COMPONENT],
  exports:[...COMPONENT]
})
export class TestComponentModule{

}
