import { useContext } from "react"
import { GlobalContext } from './../../context/GlobalContext'

function Index() {
    const { transactions } = useContext(GlobalContext)

    const transactionAmount = transactions.map(transaction => transaction.amount)

    const income = transactionAmount
                    .filter(transaction => transaction > 0)
                    .reduce((acc, item) => (acc += item), 0)
                    .toFixed(2)

    const expense = Math.abs(
                        transactionAmount
                        .filter(transaction => transaction < 0)
                        .reduce((acc, item) => (acc += item), 0)
                    ).toFixed(2)

    return (
        <div className="account-component">
            <div className="account-component-h2-wrapper">
                <h2 className="account-component-h2">Income</h2>
                <p className="account-component-p income">+ $ {income}</p>
            </div>
            <div className="account-component-h2-wrapper">
                <h2 className="account-component-h2">Expense</h2>
                <p className="account-component-p expense">-$ {expense}</p>
            </div>
        </div>
    )
}

export default Index
