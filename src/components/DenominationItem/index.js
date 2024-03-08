// Write your code here
import './index.css'

const DenominationsItem = props => {
  console.log(props)
  const {denominationsItem, withdrawMoney} = props
  console.log(denominationsItem)
  const {uniqueNo, value} = denominationsItem
  console.log(value)
  const onWithdraw = () => {
    withdrawMoney(uniqueNo, value)
  }
  return (
    <button className="amount-card" onClick={onWithdraw} type="button">
      <h1 className="amount-value">{value}</h1>
    </button>
  )
}

export default DenominationsItem
