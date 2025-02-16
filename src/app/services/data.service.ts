import { Observable } from "rxjs";
import { Task } from "../models/task";

export abstract class DataService {
    abstract getData(): Observable<Task[]>;
} 