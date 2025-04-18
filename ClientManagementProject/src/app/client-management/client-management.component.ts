import { Component } from '@angular/core';
import { ClientCreationComponent } from '../client-creation/client-creation.component';
import { ClientMeetingScheduleComponent } from '../client-meeting-schedule/client-meeting-schedule.component';

@Component({
  selector: 'app-client-management',
  imports: [ClientCreationComponent,ClientMeetingScheduleComponent],
  templateUrl: './client-management.component.html',
  styleUrl: './client-management.component.css'
})
export class ClientManagementComponent {

}
