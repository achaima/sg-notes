
describe('TodosController', () => {
  let controllerToTest; //because this is an instance it is lower-case
  let MockTodosFactory; //mock version of the TodosFactory

  beforeEach(() => { //saying the name of the app and that before each test this should be executed
    module('todosApp');
    MockTodosFactory = {
      list: [],
      add: jasmine.createSpy(),
      clear: jasmine.createSpy()
    };
    inject(($controller) => {
      controllerToTest = $controller('TodosController', { TodosFactory: MockTodosFactory }); //here it is saying it will create an instance of the controller with TodosController name
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

  describe('add()', () => {
    it('should call TodosFactory.add() with correct parameter', () => {
      const inputText = 'new todo';

      controllerToTest.inputText = inputText;
      controllerToTest.add();
      expect(MockTodosFactory.add).toHaveBeenCalledWith(inputText);
    });
    it('should clear inputText', () => {
      const inputText = 'new todo 2';

      controllerToTest.inputText = inputText;
      controllerToTest.add();
      expect(controllerToTest.inputText).toEqual('');
    });
  });
});
