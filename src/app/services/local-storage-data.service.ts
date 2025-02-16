import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { Task } from "../models/task";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LocalStorageDataService implements DataService {
    getData(): Observable<Task[]> {
        const localStorageData = localStorage.getItem('tasks');

        return of(
            JSON.parse(localStorageData!)
        );
    }
}