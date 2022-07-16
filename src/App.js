import React,{useState} from "react";
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from "./components/Expenses/Expenses";

const DummyExpenses= [
  {
    id: "1",
    title: "Toilet Paper",
    amount: 94.75,
    date: new Date(2020, 2, 28),
  },
  {
    id: "2",
    title: "Car Insurance",
    amount: 294.75,
    date: new Date(2021, 2, 28),
  },
  {
    id: "3",
    title: "Book",
    amount: 12.75,
    date: new Date(2021, 4, 28),
  },
];

const App= ()=> {
  const[expenses, setExpeneses]= useState(DummyExpenses);
  const addExpenseHandler = (expense)=>{
    setExpeneses(prevExpenses =>{
      return [expense,...expenses]
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets Get Started"),
  //   React.createElement(Expenses, {items:expenses})
  // );
}

export default App;
