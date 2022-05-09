import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'event-thumbnail',
  template: `
  <div class="well hoverwell thumbnail">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}} </div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
    <div>
      <span>Location: {{event.location.address}}</span>
      <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
    </div>
    <!-- <div>
      <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
    </div> -->
  </div>
  `,
  styles: [`
    .pad-left { margin-left: 10px; }
    .well div { color: #bbb; }
  `]
})
export class EventThumbnailComponent {
  // Passing data from Parent to child
  @Input() event:any

  /*
  another 2 examples for passing data to parent component
  someProperty:any = "some value"

  logFoo() {
    console.log('foo')
  }
  */

  /* Passing data from child to parent
    @Output() eventClick = new EventEmitter()
  */

  // handleClickMe() {
    // using Emitter to pass info from child to parent
  //   this.eventClick.emit(this.event.name);
  // }

}
