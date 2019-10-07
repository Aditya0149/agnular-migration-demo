import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { RouteManagerService } from '../../utils/route-manager.service';
import { RootScopeService } from 'src/Angular/utils/root-scope.service';
import { SharedService } from 'src/Angular/utils/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() private setUserName = new EventEmitter();
  title = "Welcome to user home component";
  constructor(private rootscope: RootScopeService, private routeManager:RouteManagerService, private sharedService:SharedService) {
    this.routeManager.setBreadcrumb(['Home', 'User']);
  }

  ngOnInit() {
    this.rootscope.title = 'Angular Now';
    this.sharedService.userName.next('User');
  }

}
