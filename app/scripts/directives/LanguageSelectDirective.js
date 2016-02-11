angular.module('frontendApp') .directive('ngTranslateLanguageSelect', function (LocaleService) { 'use strict';

        return {
            restrict: 'A',
            replace: true,
            template: '<ul class="dropdown-menu">'
                          +'<li ng-repeat="lang in localesDisplayNames" ng-class="(lang == currentLocaleDisplayName) ? \'active\' : \'\' "><a ng-click="changeLanguage(lang)">{{lang}}</a></li>'+
                       '<ul>',
            controller: function ($scope) {
                $scope.currentLocaleDisplayName = LocaleService.getLocaleDisplayName();
                $scope.localesDisplayNames = LocaleService.getLocalesDisplayNames();
                $scope.visible = $scope.localesDisplayNames &&
                $scope.localesDisplayNames.length > 1;
    
                $scope.changeLanguage = function (locale) {
                    LocaleService.setLocaleByDisplayName(locale);
                };
            }
        };
    });

/**
'<div class="language-select" ng-if="visible">'+
                '<label>'+
                    '{{"directives.language-select.Language" | translate}}:'+
                    '<select ng-model="currentLocaleDisplayName"'+
                        'ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"'+
                        'ng-change="changeLanguage(currentLocaleDisplayName)">'+
                    '</select>'+
                '</label>'+
            '</div>'+
            ''
*/