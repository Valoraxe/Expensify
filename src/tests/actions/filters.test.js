import {setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter} from '../../actions/filters'
import moment from 'moment'

test("should set start date object", () => {
  const action = setStartDate(moment(0))
  expect(action).toEqual({
    type: "SET_START_DATE",
    date: moment(0)
  });
});

test("should set end date object", () => {
  const action = setEndDate(moment(0))
  expect(action).toEqual({
    type: "SET_END_DATE",
    date: moment(0)
  });
});

test("should sort by amount", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT",
  });
});

test("should sort by date", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
  });
});

test("should set text filter object", () => {
  const action = setTextFilter("filterMe")
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: "filterMe"
  });
});

test("should set text filter default", () => {
  const action = setTextFilter()
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});
