
describe('TodosController', () => {
  let controllerToTest;

  beforeEach(() => { //saying the name of the app and that before each test this should be executed
    module('todosApp');
    inject(($controller) => {
      controllerToTest = $controller('TodosController'); //here it is saying it will create an instance of the controller with TodosController name

    });
  });

  describe('initialisation', () => {
    it('should set initialise values correctly',  () => {
      expect(controllerToTest.list).toEqual([]);
    });
    it('should set initialise inputText correctly',  () => {
      expect(controllerToTest.inputText).toEqual('');
    });
  });
});
