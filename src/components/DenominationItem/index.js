// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachItem} = props
  const {value} = eachItem

  return (
    <li>
      <button type="button" className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
