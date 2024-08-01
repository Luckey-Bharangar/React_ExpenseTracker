import './App.css';

import { Typography, styled, Box } from '@mui/material';
import { useState } from 'react';

//components
import Balance from './components/Balance'
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transaction from './components/Transaction';


const Header = styled(Typography)`
  font-size: 36px;
  color: blue;
  text-transform: uppercase;
`
const Component = styled(Box)`
   display: flex;
   background: #fff;
   width:600px;
   padding: 10px;
   border-radius:5px;
   margin:auto;
   & > div {
    height: 70vh;
    width:50%;
    padding:10px;
   }
`

function App() {
  const [transactions, setTransactions] = useState([
    { text: 'momos', id: 1, amount: -20 },
    { text: 'salary', id: 2, amount: 3000 },
    { text: 'coffee', id: 3, amount: -300 },
    { text: "bonus", id: 4, amount: 500 }
  ])

  return (
    <Box className="App">
      <Header>expense tracker</Header>
      <Component>
        <Box>
          <Balance transactions={transactions} />
          <ExpenseCard transactions={transactions} />
          <NewTransaction setTransactions={setTransactions}/>
        </Box>
        <Box>
          <Transaction transactions={transactions} setTransactions={setTransactions} />
        </Box>
      </Component>
    </Box>
  );
}

export default App;
