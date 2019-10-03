import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { RouteManagerService } from '../../utils/route-manager.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() private setUserName = new EventEmitter();
  title = "Welcome to user home component";
  constructor(@Inject('$rootScope') private rootscope, private routeManager:RouteManagerService) { }

  ngOnInit() {
    this.rootscope.title = 'Angular Now';
    this.routeManager.setBreadcrumb(['Home', 'User']);
    this.setUserName.emit('User');
  }

}
