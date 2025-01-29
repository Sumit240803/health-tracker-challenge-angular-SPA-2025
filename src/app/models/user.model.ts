import { Workout } from "./workout.model";


export interface User{
    username : string;
    workouts : Workout[];
}