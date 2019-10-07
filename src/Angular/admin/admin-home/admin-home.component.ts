import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { RouteManagerService } from '../../utils/route-manager.service';
import { RootScopeService } from 'src/Angular/utils/root-scope.service';
import { SharedService } from 'src/Angular/utils/shared.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  @Output() private setUserName = new EventEmitter();
  title = "Welcome to admin home component";
  constructor(private rootscope: RootScopeService, private routeManager:RouteManagerService, private sharedService: SharedService) {
    this.routeManager.setBreadcrumb(['Home', 'Admin']);    
   }

  ngOnInit() {
    this.rootscope.title = 'Angular Now';
    this.sharedService.userName.next('Admin');
  }
}
