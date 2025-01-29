import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  usernameForm = new FormGroup({
    username : new FormControl('',[Validators.required])
  });
  workoutForm = new FormGroup({
    type : new FormControl('',[Validators.required]),
    minutes : new FormControl(30 , [Validators.required,Validators.min(1)])
  });
  workoutTypes = ['Running', 'Cycling', 'Swimming', 'Weight Training', 'Yoga'];
  constructor (private userService : UserService){

  }
  setUsername() : void{
    if(this.usernameForm.valid){
      this.userService.setUsername(this.usernameForm.value.username!);
    }
  }
  addWorkout() : void{
    if(this.workoutForm.valid){
      this.userService.addWorkouts({
        type : this.workoutForm.value?.type!,
        minutes : this.workoutForm.value?.minutes!,
      });
      this.workoutForm.reset({minutes:30});
    }
  }
}
