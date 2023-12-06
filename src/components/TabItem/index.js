// Write your code here
import './index.css'

const TabItem = ({tabId, displayText, isActive, onClick}) => {
  const handleClick = () => {
    onClick(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-item ${isActive ? 'active' : ''}`}
        onClick={handleClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
