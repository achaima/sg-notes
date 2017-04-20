describe('TodosFactory', () => {

  let factoryToTest;

  beforeEach( () => {
    module('todosApp');
  });

  beforeEach(inject((TodosFactory) => {
    factoryToTest = TodosFactory;
  }));

  describe('add()', () => {
    it('should add an item to todo list', () => {
      const newTodoItem = 'go to the shop';

      factoryToTest.add(newTodoItem);
      expect(factoryToTest.list).toContain(newTodoItem);
    });
    it('should add an item to end of todo list', () => {
      const newTodoItem1 = 'buy milk';
      const newTodoItem2 = 'buy bread';

      factoryToTest.add(newTodoItem1);
      factoryToTest.add(newTodoItem2);
      expect(factoryToTest.list[factoryToTest.list.length-1]).toEqual(newTodoItem2);
    });
  });


  describe('clear()', () => {
    it('should clear the whole todo list', () => {
      const newTodoItem = 'buy milk';
      const otherTodoItem = 'go to the shop';
      factoryToTest.add(newTodoItem);
      factoryToTest.add(otherTodoItem);

      factoryToTest.clear();
      expect(factoryToTest.list).toEqual([]);
    });
  });

});
