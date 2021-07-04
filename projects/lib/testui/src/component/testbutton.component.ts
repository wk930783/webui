import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'testbutton',
  template: `
  <button mat-raised-button (click)="OnClick()" [color]="colortype" [disabled]="disabled" [ngStyle]='{"min-width":minwidth}'>Menu</button>
`
})
export class TestButtonComponent {
  @Input() colortype: string = "primary"
  @Input() disabled: boolean = false;
  @Input() minwidth: string = "90px"
  @Output() private clickOuter = new EventEmitter<any>();
  constructor() { }

  OnClick() {
    this.clickOuter.emit();
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
}
