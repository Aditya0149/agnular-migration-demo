declare var angular: angular.IAngularStatic;
import { RouteManagerService } from '../../Angular/utils/route-manager.service';
import { downgradeInjectable } from '@angular/upgrade/static';  

angular.module('cloudlex')
.factory('routeManager',downgradeInjectable(RouteManagerService))