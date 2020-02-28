import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h3>Interpolation</h3>
    <div>Welcome {{name}}</div>
    <div>{{2+2}}</div>
    <div>{{"Welcome " + name}}</div>
    <div>{{"Length:" + name.length}}</div>
    <div>{{name.toUpperCase()}}</div>
    <div>{{greet()}}</div>
    <div>{{siteUrl}}</div>

    <h3>PropertyBinding</h3>
    <input [id]="myId" type="text" value="Sagar">
    <input [id]="myId" [disabled]="true" type="text" value="Disabled">
    <input [id]="myId" [disabled]="isDisabled" type="text" value="isDisabled=true">
    <input [id]="myId" bind-disabled="isDisabled" type="text" value="bind-disabled=isDisabled">

    <h3>Class Binding</h3>
    <div class="text-success">Success</div>
    <div [class]="dangerClass">Danger</div>
    <div [class.text-danger]="hasError">[class.text-danger]="hasError"   hasError=true</div>
    <div [ngClass]="messageClass">[ngClass]="messageClass"</div>

    <h3>Style Binding</h3>
    <div [style.color]="'red'">[style.color]="'red'"</div>
    <div [style.color]="success">[style.color]="success"  public success="green"  </div>
    <div [ngStyle]="styleObj">Style Object</div>

    <h3>Event Binding</h3>
    <button (click)="onClick($event)">Greet</button>
    <button (click)="greetMsg='Welcome Sagar'">Greet</button>
    <div>{{greetMsg}}</div>

    <h3>Template refereence variable</h3>
    <input type="text" #myText>
    <button (click)="onSubmit(myText.value)">Submit</button>

    <h3>Two Way Binding</h3>
    <input type="text" [(ngModel)]="name">
    <div>{{name}}</div>

    <h3>ngIf Directive</h3>
    <h5>Simple If....Else</h5>
    <div *ngIf="flag; else elseBlock">
      flag=true
    </div>
    <ng-template #elseBlock>
      <div>flag=false</div>
    </ng-template>

    <h5>Simple If ...then...Else</h5>
    <div *ngIf="flag; then thenBlock; else elseBlock1"></div>
    <ng-template #thenBlock>
      <div>flag=true</div>
    </ng-template>
    <ng-template #elseBlock1>
      <div>flag=false</div>
    </ng-template>

    <h3>ngSwitch Directive</h3>
    <div [ngSwitch]="color">
      <div *ngSwitchCase="'red'">You are selected Red</div>
      <div *ngSwitchCase="'green'">You are selected Green</div>
      <div *ngSwitchCase="'blue'">You are selected Blue</div>
      <div *ngSwitchDefault>You are selected default color</div>
    </div>

    <h3>ngFor Directive</h3>
    <div *ngFor="let color of colors;index as i;first as f;last as l;odd as o;even as e">
      <div>Color-{{color}} Index-{{i}} First-{{f}} Last-{{l}} Odd={{o}} Even-{{e}}</div>
    </div>

    <h3>Component Interaction</h3>
    <div>{{"Hello "+parentData}}
  `,
  styles: [`
    .text-success{
      color:green;
    }
    .text-danger{
      color:red;
    }
    .text-special{
      font-style:italic;
    }
  `]
})
export class TestComponent implements OnInit {
  public name="Jojo";
  public siteUrl=window.location.href;

  public myId="textId";
  public isDisabled=true;

  public dangerClass="text-danger";
  public hasError=false;
  public isSpecial=true;
  public messageClass={
    "text-success":!this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }

  public success="green";
  public styleObj={
    color:"blue",
    fontStyle:"italic"
  }

  public greetMsg="";

  public msgString="";

  public flag=true;

  public color="red";

  public colors=["red","blue","green","orange"];

  @Input() public parentData;

  constructor() { }

  ngOnInit() {
    debugger;
  }

  greet() {
    return "Greet" + this.name;
  }

  onClick(evt){
    debugger;
    console.log(evt);
    this.greetMsg="Welcome Jojo";
  }

  onSubmit(value){
    console.log(value);
  }

}
