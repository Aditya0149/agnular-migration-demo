import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { RootScopeService } from './utils/root-scope.service';
import { constants } from './constant';
import { SharedService } from '../Angular/utils/shared.service';
import { RouteManagerService } from './utils/route-manager.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public links = [];
  constructor(public rootScopeService:RootScopeService, public sharedService:SharedService, public routeManager:RouteManagerService) { }

  ngOnInit() {
    this.links = constants.links;
  }

}
