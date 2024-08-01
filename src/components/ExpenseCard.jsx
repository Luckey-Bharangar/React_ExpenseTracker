import { Box,Typography,Card,CardContent,styled } from "@mui/material"

const Container = styled(Box)`
  display: flex;
  & > div{
    flex:1;
    padding: 10px;
  }

`

const ExpenseCard = ({transactions}) =>{

    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item>0 ).reduce((amount,item)=>(amount+=item) , 0).toFixed(2);
    const expense = (amount.filter(item => item<0 ).reduce((amount,item)=>(amount+=item) , 0) * -1).toFixed(2);

    return(
        <Container>
            <Card>
                <CardContent>Income</CardContent>
                <CardContent style={{ color: 'green'}}>₹{income}</CardContent>
            </Card>
            <Card>
                <CardContent>Expense</CardContent>
                <CardContent style={{ color: 'red'}}>₹{expense}</CardContent>
            </Card>
        </Container>
    )
}
export default ExpenseCard;