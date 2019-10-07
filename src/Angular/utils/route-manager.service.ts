import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class RouteManagerService {
  private currentState;
  private breadcrumb = new BehaviorSubject([]);
  constructor() {}
  setBreadcrumb(arr) {
      this.breadcrumb.next(arr);
  }
}
