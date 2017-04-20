describe('DuckController', () => {
  let controllerToTest;
  let httpBackend;
  let mock$State;
  let mock$StateParams;
  let testDuckId;
  let API_URL;

  beforeEach(() => {
    module('DuckApp');
    inject(($controller, $httpBackend, _API_URL_) => {
      API_URL = _API_URL_;
      console.log('API_URL', API_URL);
      httpBackend = $httpBackend;
      mock$State = {
        go: jasmine.createSpy()
      };
      mock$StateParams = {
        duckId: testDuckId
      };
      controllerToTest = $controller('DuckController', {
        $stateParams: mock$StateParams,
        $state: mock$State
      });
    });
  });

  describe('initialisation', () => {
    xit('Should do a basic test', () => {
      console.log('got inside the basic test');
      httpBackend.flush();
      console.log('in test: allDucks', controllerToTest.allDucks);
    });
    it('should populate allDucks with correct data', () => {
      const testDucks = ['duck one', 'duck two'];


      httpBackend
        .when('GET', `${API_URL}/ducks`)
        .respond(testDucks);
      httpBackend.flush();
      expect(controllerToTest.allDucks).toEqual(testDucks);
      console.log( 'controllerToTest.allDucks', controllerToTest.allDucks);

    });
  });


});
