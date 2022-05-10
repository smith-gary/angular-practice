import { ToastrService } from './../common/toastr.service';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';

// declare let toastr;

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <!-- (eventClick)="handleEventClicked($event)"  -->

      <!--
      Template Reference Variable (TRV)
      #thumbnail
     -->
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail
            (click)="handleThumbnailClick(event.name)"
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
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
  `,
})
export class EventsListComponent implements OnInit {
  //private enventService is short hand for this.eventService = eventService
  events: any[];
  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  //components have lifecycle hooks like ngOnInit
  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

  // handleEventClicked(data) {
  //   console.log('recieved', data)
  // }
}
