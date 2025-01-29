import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Workout } from '../models/workout.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user :User | null = null;
  private readonly storageKey = 'userData';
  constructor() { 
    const savedData = localStorage.getItem(this.storageKey);
    if(savedData){
      this.user = JSON.parse(savedData);
    }
  }
  private savetoLocalStorage():void{
    localStorage.setItem(this.storageKey,JSON.stringify(this.user));
  }
  setUsername(username : string):void{
    if(!this.user){
      this.user = {username , workouts :[]};
    }else{
      this.user.username = username;
    }
    this.savetoLocalStorage();
  }
  addWorkouts(workout:Omit<Workout,'date'>):void{
    if(this.user){
      this.user.workouts.push({...workout,date : new Date()});
      this.savetoLocalStorage();
    }
  }
  getUser():User |null{
    return this.user;
  }
}
