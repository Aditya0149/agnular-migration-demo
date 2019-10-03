declare var angular: angular.IAngularStatic;
import { UserDirective } from '../../Angular/utils/userDirective';
import { downgradeComponent } from '@angular/upgrade/static';  

angular.module('cloudlex.directives', [])
.directive(
  'user',
  downgradeComponent({ component: UserDirective }) as any
)