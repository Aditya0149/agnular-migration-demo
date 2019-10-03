import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { RouteManagerService } from '../utils/route-manager.service';

@Component({
  selector: 'app-angular-user',
  templateUrl: './angular-user.component.html',
  styleUrls: ['./angular-user.component.scss']
})
export class AngularUserComponent implements OnInit {
  @Output() setUserName:EventEmitter<string> = new EventEmitter();
  constructor(private routeManagerService: RouteManagerService, @Inject('$rootScope') private rootScope) { }

  ngOnInit() {
    this.rootScope.title = "Angular";
    this.routeManagerService.setBreadcrumb(['Home','Angular User']);
    this.setUserName.emit('Angular User');
  }

}
