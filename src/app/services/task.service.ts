import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from 'src/Task';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private configUrl = 'http://localhost:5000/tasks'

  
  constructor(private http: HttpClient) { }


  getTask(): Observable<Task[]>{

    // return of(TASKS);
    return this.http.get<Task[]>(this.configUrl);
  }
}
