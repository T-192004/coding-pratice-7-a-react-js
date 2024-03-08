// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationsItem from '../DenominationItem/index'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdrawMoney = (uniqueNo, value) => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    console.log(amount)
    console.log(denominationsList)
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile">
            <p className="profile-pic">S</p>
            <h1 className="profile-name">Sarah Williams</h1>
          </div>
          <div className="balance-card">
            <p className="balance-title">Your Balance</p>
            <div className="balance-amount-card">
              <p className="balance-amount">{amount}</p>
              <p className="balance-currency">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-card">
            <p className="withdraw-title">Withdraw</p>
            <p className="withdraw-description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="withdraw-amount-card">
              {denominationsList.map(eachItem => (
                <DenominationsItem
                  denominationsItem={eachItem}
                  key={eachItem.id}
                  withdrawMoney={this.withdrawMoney}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
