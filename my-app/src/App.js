import ExpenseItem from './components/ExpenseItem';
import Expenses from './components/Expenses';
import './App.css';

function App() {

  const expenses=[
    {
      id:'e1',
      title:'car insurance', 
      amount: 277.28, 
      date: new Date (2021,2,11)
    },
    { 
      id:'e2',
      title: 'food',
      amount: 34.67, 
      date: new Date(2021, 2, 23) 
    },
    { 
      id: 'e3',
      title: 'venmo', 
      amount: 21.12, 
      date: new Date(2021, 2, 15) 
    },
    { 
      id: 'e4',
      title: 'party', 
      amount: 55.11, 
      date: new Date(2021, 2, 1) 
    }
  ]

  return (
    <div>
      <h2>Let's get started!</h2>
      
        <Expenses  items={expenses}></Expenses>
      
    </div>
  );
}

export default App;
