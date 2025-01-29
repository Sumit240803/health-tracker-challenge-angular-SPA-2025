import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInputComponent } from './user-input/user-input.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UserInputComponent,UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'health-challenge-tracker';
}
