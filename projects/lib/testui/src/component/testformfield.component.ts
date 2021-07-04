import { Component } from "@angular/core";
import { MatFormFieldControl } from "@angular/material/form-field";

@Component({
  selector:'testformfield',
  template:`<mat-form-field appearance="fill">
      <input [hidden]="true" matInput>
    <ng-content></ng-content>
  </mat-form-field>

  `
})
export class TextFormField{

}
