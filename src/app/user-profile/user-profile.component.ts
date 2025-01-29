import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
    constructor(private userService : UserService){}

    get user():User|null{
      return this.userService.getUser();
    }

    get totalWorkout():number{
      return this.user?.workouts.length||0;
    }

    get totalTime():number{
      return this.user?.workouts.reduce((sum,workout)=>sum+workout.minutes,0)||0;
    }
}
