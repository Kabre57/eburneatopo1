import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class PortoflioService extends RestService {
  endpoint(): string {
    return 'portfolio';
  }
  public search = new BehaviorSubject<string>("");
}
