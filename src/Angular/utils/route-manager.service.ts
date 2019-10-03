import { Injectable } from '@angular/core';

@Injectable()
export class RouteManagerService {
  private currentState;
  private breadcrumb;
  constructor() {
    this.breadcrumb = [];
  }
  setBreadcrumb(arr) {
      this.breadcrumb = arr;
  }
  getBreadcrumb(state) {
      return this.breadcrumb;
  }
}
