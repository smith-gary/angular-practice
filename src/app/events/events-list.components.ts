import { Component } from "@angular/core";


@Component({
  selector: 'events-list',
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <!-- (eventClick)="handleEventClicked($event)"  -->

    <!--
      Template Reference Variable (TRV)
      #thumbnail
     -->
    <event-thumbnail  [event]="event1"></event-thumbnail>
  </div>
  <!-- Example of using TRV
  <h3>{{thumbnail.someProperty}}</h3>

  <button class="btn btn-primary" (click)="thumbnail.logFoo()">logging foo!</button> -->

  <!--
    Local styling by Angular, goes below end template string, separated by a comma
    new template string is escaped so comment can be made
    styles: [\`
    .well div { color: red; }
  \`] -->

`})

export class EventsListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }

  // handleEventClicked(data) {
  //   console.log('recieved', data)
  // }

}
