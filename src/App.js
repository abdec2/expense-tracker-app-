import { GlobalProvider } from './context/GlobalContext'
import Header from './components/Header'
import Balance from './components/Balance'
import Account from './components/AccountSummary'
import TransList from './components/TransList'
import AddTrans from './components/AddTransaction';

import './App.css'

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Balance />
        <Account />
        <TransList />
        <AddTrans />
      </div>
    </GlobalProvider>
  );
}

export default App;
