// Write your code here
import DenominationItem from '../DenominationItem'
import './index.css'

const CashWithdrawal = props => {
  const {denominationsList} = props
  return (
    <div className="main-div">
      <div className="main-sub-div">
        <div className="first-div">
          <h1 className="s-element">S</h1>
          <h1 className="heading-sarah">sarah Williams</h1>
        </div>
        <div className="second-div">
          <p className="your-balance">Your Balance</p>
          <div>
            <p className="amount">2000</p>
            <p className="para-amount">In Rupees</p>
          </div>
        </div>
        <p className="withdraw">Withdraw</p>
        <p className="choose">CHOOSE SUM (IN RUPEES)</p>
        <ul className="flex-wrap">
          {denominationsList.map(eachItem => (
            <DenominationItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default CashWithdrawal
