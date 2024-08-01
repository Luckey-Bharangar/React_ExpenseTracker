import {ListItem, ListItemIcon, ListItemText,styled } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"

const Detail = styled(ListItem)`
  margin-top: 10px
`

const TransactionList = ({ transaction , setTransactions , transactions }) =>{
    const color = transaction.amount < 0 ? 'red' : 'green';

    const deleteHandler = (id) => {
      setTransactions(transactions.filter(transaction => transaction.id !== id))
    }

    return(
       <Detail style={{background:`${color}` , color: '#fff'}}>
        <ListItemIcon>
          <DeleteIcon onClick={() => deleteHandler(transaction.id)} />
        </ListItemIcon>
        <ListItemText>{transaction.text}</ListItemText>
        <ListItemText>{transaction.amount}</ListItemText>
       </Detail>
       
    )
}
export default TransactionList;