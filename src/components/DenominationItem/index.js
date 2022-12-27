// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachItem} = props
  const {value} = eachItem

  return (
    <div>
      <button className="button" type="button">
        {value}
      </button>
    </div>
  )
}

export default DenominationItem
