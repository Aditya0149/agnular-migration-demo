import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { RouteManagerService } from '../utils/route-manager.service';
import { RootScopeService } from '../utils/root-scope.service';
import { SharedService } from '../utils/shared.service';

@Component({
  selector: 'app-angular-user',
  templateUrl: './angular-user.component.html',
  styleUrls: ['./angular-user.component.scss']
})
export class AngularUserComponent implements OnInit {
  @Output() setUserName:EventEmitter<string> = new EventEmitter();
  constructor(private routeManagerService: RouteManagerService, private rootScope:RootScopeService, private sharedService:SharedService) { 
    this.routeManagerService.setBreadcrumb(['Home','Angular User']);

  }

  ngOnInit() {
    this.rootScope.title = "Angular";
    this.sharedService.userName.next('Angular User');
  }

}
