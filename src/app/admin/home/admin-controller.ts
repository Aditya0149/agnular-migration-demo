declare var angular: angular.IAngularStatic;
import { AdminHomeComponent } from '../../../Angular/admin/admin-home/admin-home.component';
import { downgradeComponent } from '@angular/upgrade/static'; 

    angular
        .module('cloudlex.admin')
        .directive(
            'adminHome',
            downgradeComponent({ component: AdminHomeComponent }) as any
        )

