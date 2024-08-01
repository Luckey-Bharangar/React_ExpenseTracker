import { Box,TextField,Button,Typography,styled} from "@mui/material";
import { useState } from "react";


const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h5,& > div, & > button{
    margin-top: 30px
  }
`

const NewTransaction = ({ setTransactions }) =>{
const[text,setText] = useState("");
const[amount,setAmount] = useState();

const  addTransaction = () => {
   const transaction= {
         id: crypto.randomUUID(),
         text:text,
         amount:+amount
   }
   setTransactions( prevState => [transaction, ...prevState]);
}

    return(
    <Container>
        <Typography variant="h5">New Transaction</Typography>
        <TextField label="Enter Expense" onChange={e=>setText(e.target.value)}/>
        <TextField label="Enter Amount" onChange={e=> setAmount(e.target.value)} />
        <Button variant="contained" onClick={()=>addTransaction()}>Add Transaction</Button>
    </Container>
    )
}
export default NewTransaction;