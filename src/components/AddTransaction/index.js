import { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'


function Index() {
    const { addTransaction } = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = new FormData(e.target)
        const Transaction = {
            id: Date.now(), 
            desc: form.get('desc'), 
            amount: parseFloat(form.get('amount'))
        }
        addTransaction(Transaction)
        e.target.reset()
    }

    return (
        <div className="addTrans-component">
            <div className="translist-component-h2-wrapper">
                <h3 className="translist-component-h2">Add new transaction</h3>
            </div>

            <div className="addTrans-form-wrapper">
                <form onSubmit={handleSubmit}>
                    <div style={{paddingRight:'10px'}}>
                        <label className="form-label" htmlFor="desc">Description</label>
                        <input className="form-input" type="text" name="desc" id="desc" required/>
                    </div>
                    <div style={{paddingRight:'10px'}}>
                        <label className="form-label" htmlFor="amount">Transaction Amount</label>
                        <input className="form-input" type="number" name="amount" id="amount" required/>
                    </div>
                    <div>
                        <button type='submit' className="submitBtn" >Add Transaction</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Index
