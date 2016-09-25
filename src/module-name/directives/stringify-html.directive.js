export default class StringifyHTMLDirective {

  static get directiveName() {
    return 'stringifyHtml';
  }

  static directiveFactory($compile, $timeout) {
    StringifyHTMLDirective.instance = new StringifyHTMLDirective($compile, $timeout);
    return StringifyHTMLDirective.instance;
  }

  constructor($compile, $timeout) {
    this.restrict = 'EA';
    this.scope = '=';

    this.bindToController = true;

    this.$compile = $compile;
    this.$timeout = $timeout;
  }

  compile() {
    return {
      pre: function preLink(scope, iElement) {
        const html = iElement.html();
        iElement.text(html);
      },
    };
  }

  link() {
    return;
  }
}
StringifyHTMLDirective.directiveFactory.$inject = ['$compile', '$timeout'];
