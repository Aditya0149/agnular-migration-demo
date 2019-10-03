declare var angular: angular.IAngularStatic;
import { cloudlexUpperCase } from '../../Angular/utils/pipe-utils';
angular.module('cloudlex.filters', [])
    .filter('upperCase', () => cloudlexUpperCase )