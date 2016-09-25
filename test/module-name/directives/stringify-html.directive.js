describe('Unit: Stringify HTML directive', function StringifyHTMLTests() {
  let $compile;
  let $rootScope;

  beforeEach(function initializeAngularModule() {
    angular.mock.module('module-name');

    angular.mock.inject((_$compile_, _$rootScope_) => {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    });
  });

  it('Should stringify innerHTML', angular.mock.inject(function shouldStringifyInnerHTML() {
    const expected = `
        <h1>Title</h1>
        <p>Paragraph</p>`;
    const element = $compile(`
      <div class="container" stringify-html>${expected}</div>`
    )($rootScope);
    $rootScope.$digest();
    expect(element.text()).toBe(expected);
  }));
});
