//import { RouteManagerService } from '../app/utils/routeManager';
export class RouteManagerService {
    setBreadcrumb;
    getBreadcrumb;
  }

export const routeManagerProvider = {
  provide: RouteManagerService,
  useFactory: (i: any) => i.get('routeManager'),
  deps: ['$injector']
};