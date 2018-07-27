import moment from 'moment'

const expenses = [
  {
    id: "1",
    description: "Buddy",
    note: "",
    amount: 300,
    createdAt: 0
  }, {
    id: "2",
    description: "Rent",
    note: "",
    amount: 600,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  }, {
    id: "3",
    description: "Credits",
    note: "",
    amount: 2000,
    createdAt: moment(0).add(4, 'days').valueOf()
  }
]

export default expenses
