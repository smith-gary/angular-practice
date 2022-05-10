import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{ event?.name }}</h2>
      <div>Date: {{ event?.date }}</div>
      <!--
        use class binding for single select
        [class.green]="whatever expression" (ensure to add the styles)

        use ng directive for multi class selection in line or in function
        [ngClass]="{
          green: event?.time === '8:00 am',
          bold: event?.time === '8:00 am'
        }"

        you can also have another class ie class.well
        [ngClass]="getStartTimeClass()"
      -->
      <!--
        terenary statements can be applied as well
        use style for single class selection
        [style.color]
        use ngStyle for multi class
        [ngStyle]="
        {
          color: event?.time === '8:00 am' ? 'green' : 'yellow',
          'font-weight': event?.time === '8:00 am' ? 'bold' : 'normal'
        }"

        if a direct style was added ie.. []="..."
        ngStyle is additive
      -->
      <div [ngStyle]="getStartTimeClass()" [ngSwitch]="event?.time">
        Time: {{ event?.time }}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: \${{ event?.price }}</div>
      <!--
      - use if not being rendered/unrendered freq
      *ngIf="event?.location"
      - if freq hidden/show bind to DOM through ng
    -->
      <div *ngIf="event?.location">
        <span>Location: {{ event?.location?.address }}</span>
        <span class="pad-left"
          >{{ event?.location?.city }}, {{ event?.location?.country }}</span
        >
      </div>
      <!--
      - use if not being rendered/unrendered freq
      *ngIf="event?.onlineUrl"
      - if freq hidden/show bind to DOM through ng
    -->
      <div *ngIf="event?.onlineUrl">Online Url: {{ event?.onlineUrl }}</div>
      <!-- <div>
      <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
    </div> -->
    </div>
  `,
  styles: [
    `
      .green {
        color: green !important;
      }
      .bold {
        font-weight: bold;
      }
      .thumbnail {
        min-height: 210px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  // Passing data from Parent to child
  @Input() event: any;

  getStartTimeClass(): any {
    // const isEarlyStart = this.event && this.event.time === '8:00 am';
    // return {
    //   green: isEarlyStart,
    //   bold: isEarlyStart,
    // };
    // can also return an array of strings
    // if (this.event && this.event.time === '8:00 am') {
    //   return 'green bold';
    // } else {
    //   return '';
    // }
    // can also return an []

    if (this.event && this.event.time === '8:00 am') {
      return {
        color: 'green',
        'font-weight': 'bold',
      };
    } else {
      return {};
    }
  }

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
