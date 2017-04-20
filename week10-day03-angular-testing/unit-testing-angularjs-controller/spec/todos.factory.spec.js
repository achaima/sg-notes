describe('TodosFactory', () => {

  let factoryToTest;

  beforeEach( () => {
    module('todosApp');
  });

  beforeEach(inject((TodosFactory) => {
    factoryToTest = TodosFactory;
  }));

  describe('add an item to todo list', () => {
    it('should add an item to todo list', () => {
      const newTodoItem = 'go to the shop';
      const otherTodoItem = 'buy milk';
      factoryToTest.add(newTodoItem);
      factoryToTest.add(otherTodoItem);
      console.log(factoryToTest.list);
      expect(factoryToTest.list).toContain(newTodoItem);
    });
  });


  describe('clear whole todo list', () => {
    it('clear the whole todo list', () => {
      const newTodoItem = 'buy milk';
      const otherTodoItem = 'go to the shop';
      factoryToTest.add(newTodoItem);
      factoryToTest.add(otherTodoItem);

      console.log(factoryToTest.list, 'should two todos');
      factoryToTest.clear();
      console.log(factoryToTest.list, 'should be empty');
      expect(factoryToTest.list).toEqual([]);
    });
  });

  describe('clear whole todo list even when theres no values', () => {
    it('clear the whole todo list', () => {

      console.log(factoryToTest.list);
      factoryToTest.clear();
      console.log(factoryToTest.list, 'should be empty');
      expect(factoryToTest.list).toEqual([]);
    });
  });


});
