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
          <h1 className="your-balance">Your Balance</h1>
          <div>
            <h1 className="amount">2000</h1>
            <p className="para-amount">In Rupees</p>
          </div>
        </div>
        <h1 className="withdraw">Withdraw</h1>
        <p className="choose">CHOOSE SUM (IN RUPEES)</p>
        <div>
          {denominationsList.map(eachItem => (
            <DenominationItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default CashWithdrawal
