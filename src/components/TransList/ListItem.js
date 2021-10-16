import { GlobalContext } from '../../context/GlobalContext'
import { useContext } from "react"

function ListItem({ id, desc, amount }) {
    const { delTransaction } = useContext(GlobalContext)

    const handleDelete = () => {
        delTransaction(id)
    }

    return (
        <div className={`listItem-component ${(amount < 0) ? 'border-expense' : 'border-income'}`}>
            <div onClick={handleDelete} className="delBtn">
                X
            </div>
            <div>
                <p>{desc}</p>
            </div>
            <div>
                <p>{(amount < 0) ? `- $${Math.abs(amount)}` : `+ $${amount}`} </p>
            </div>
        </div>
    )
}

export default ListItem
