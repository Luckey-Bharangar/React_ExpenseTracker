import { Box,Typography,styled,Divider, List } from "@mui/material"
import TransactionList from "./TransactionList";

const Transaction = ({transactions , setTransactions}) =>{
    return(
        <Box>
            <Typography>Transaction History</Typography>
            <Divider/>
            <List>
                {transactions.map(transaction=>(
                    <TransactionList transaction={transaction} setTransactions={setTransactions} transactions={transactions} />
                ))

                }
            </List>
        </Box>
    )
}

export default Transaction;