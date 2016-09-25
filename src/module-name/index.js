import directives from './directives/';

const module = angular.module('module-name', []);
directives.forEach(directive => {
  module.directive(directive.directiveName, directive.directiveFactory);
});

export default module;
