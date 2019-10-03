import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { RouteManagerService } from '../../utils/route-manager.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  @Output() private setUserName = new EventEmitter();
  title = "Welcome to admin home component";
  constructor(@Inject('$rootScope') private rootscope, private routeManager:RouteManagerService) { }

  ngOnInit() {
    this.rootscope.title = 'Angular Now';
    this.routeManager.setBreadcrumb(['Home', 'Admin']);
    this.setUserName.emit('Admin');
  }

}
