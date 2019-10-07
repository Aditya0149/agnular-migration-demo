import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RootScopeService {
  public title = "Angular.js";
  constructor() { }
}
