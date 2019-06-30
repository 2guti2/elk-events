import { Component, OnInit } from '@angular/core';
import { EventService } from './event.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'eventform',
  templateUrl: './eventform.component.html',
  styleUrls: ['./eventform.component.css']
})
export class EventformComponent implements OnInit {

  description = 'Event description';
  username = 'mgutierrez';

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  async submit() {
    try {
      let response: any = await this.eventService.save({
        id: 3,
        user_id: 5,
        event_type: 'ERROR',
        description: this.description,
        category: 'INFO',
        created_at: '2018-01-24T04:06:51Z',
        additional_user_info: 'Sysadmin',
        user_name: this.username,
      });
      alertify.success(`Event of user ${response.user_name} created successfully`)
    } catch(e) {
      alertify.error(e.message);
    }
  }
}
