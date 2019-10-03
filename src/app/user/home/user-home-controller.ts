declare var angular: angular.IAngularStatic;
import { HomeComponent } from '../../../Angular/user/home/home.component';;
import { downgradeComponent } from '@angular/upgrade/static'; 

angular.module('cloudlex.user')
.directive(
    'userHome',
    downgradeComponent({ component: HomeComponent }) as any
  )
