import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientManagementComponent } from './client-management/client-management.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClientManagementComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ClientManagementProject';
}
