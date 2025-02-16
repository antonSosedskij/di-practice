import { inject, Injectable } from "@angular/core";
import { Task } from "../models/task";
import { DataService } from "./data.service";
import { API_URL } from "../tokens/api-url.token";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiDataService implements DataService {

    private _http = inject(HttpClient);
    private _apiUrl = inject(API_URL);

    getData(): Observable<Task[]> {
        return this._http.get<any[]>(this._apiUrl);
    }
}