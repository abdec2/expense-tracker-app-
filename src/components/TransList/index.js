import ListItem from "./ListItem"
import { GlobalContext } from '../../context/GlobalContext'
import { useContext } from "react"

function Index() {
    const { transactions } = useContext(GlobalContext)
    return (
        <div className="translist-component">
            <div className="translist-component-h2-wrapper">
                <h3 className="translist-component-h2">Transactions</h3>
            </div>
            <div>
                {
                    transactions.map((item, i) => (
                        <ListItem key={i} id={item.id} desc={item.desc} amount={item.amount} />
                    ))
                }

            </div>
        </div>
    )
}

export default Index
