import { Component } from "@angular/core";

@Component({
  selector:'testbutton',
  template:`
  <button mat-button [matMenuTriggerFor]="settingsMenu">Menu</button>

<mat-menu #settingsMenu>
  <menu mat-menu-item>Profile</menu>
  <menu mat-menu-item>Account</menu>
</mat-menu>  `
})
export class TestButtonComponent{

}
