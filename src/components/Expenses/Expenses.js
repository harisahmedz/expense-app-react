import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpenseFilter';
import React,{useState} from 'react'
import ExpensesList from './ExpensesList';
import ExpensesChart from "./ExpensesChart";

const Expenses= (props)=>{
   // const expenses =  props.items;
  
    const [filteredYear, setFilteredYear] = useState('2021');
    
    const filterChangeHandler = (selectedYear)=>{
        setFilteredYear(selectedYear);
        
    }
    const filteredExpenses = props.items.filter((expense) =>{
        return expense.date.getFullYear().toString()===filteredYear;
    });




    return (
      <Card className="expenses-items">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
        
        {/* {
            filteredExpenses.length === 0 && <p>No Expenses Found</p>
        }
        {
            filteredExpenses.length >0 &&
            filteredExpenses.map((expense) => (
                <ExpenseItem
                  key ={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              ))
        } */}
        {/* {
            filteredExpenses.length === 0 ? ():
            (filteredExpenses.map((expense) => (
                <ExpenseItem
                  key ={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              )))
        } */}

  
      </Card>
    );
}
export default Expenses;