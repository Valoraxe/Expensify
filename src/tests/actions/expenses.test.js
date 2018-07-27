import { addExpense, editExpense, removeExpense} from '../../actions/expenses'

//Can't use toBe, if an object/array equals another object/array, it will always come back false
test("should remove expense", () => {
  const action = removeExpense({id: "123abc"})
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should edit expense", () => {
  const action = editExpense('123abc', { note: 'New Note' })
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New Note"
    }
  });
});

test("should add expense object", () => {
  const myExpense = {
    description: "Rent",
    amount: 1300,
    createdAt: 1000,
    note: "This was last month"
  }
  const action = addExpense(myExpense);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...myExpense,
      id: expect.any(String)
    }
  })
});

test("should add expense defaults", () => {
  const myExpense = {}
  const action = addExpense(myExpense); //Provide an empty object
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      note: "",
      amount: 0,
      createdAt: 0
    }
  })
});
