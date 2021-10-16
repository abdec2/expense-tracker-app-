import { useContext } from 'react'
import { GlobalContext } from './../../context/GlobalContext'

function Index() {
    const { transactions } = useContext(GlobalContext)
    
    const transactionAmount = transactions.map(transaction => transaction.amount)
    const balance = transactionAmount.reduce((acc, item) => (acc +=item), 0)

    return (
        <div className="balanceComponent">
            <h3 className="balance-h3">Your Balance</h3>
            <h1 className="balance-h1">{`${(balance < 0) ? `- $${Math.abs(balance).toFixed(2)}` : `$${balance.toFixed(2)}`}`}</h1>
        </div>
    )
}

export default Index
