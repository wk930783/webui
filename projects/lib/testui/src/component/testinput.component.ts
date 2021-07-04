import { Component, Input } from "@angular/core";

@Component({
  selector:'testinputtext',
  template:`<input matInput [type]="type" [disabled]="disabled"  [(ngModel)]="editcore" (blur)="onblur($event)" (focus)="onfocus()">`
})
export class TestInputText{
  @Input() editcore:string="";
  @Input() disabled:boolean=false;
  _type:string="text"
  @Input() get type(){
    return this._type;
  }
  set type(val:string){
    this._type=val;
  }
  onblur(event:any){

  }
  onfocus(){

  }
}
