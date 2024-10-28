import './index.css'

const Tabs = props => {
  const {clickTabItem, tabDetails, isActive} = props
  const {id, buttonText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabIdClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container">
      <button
        className={`tab-btn ${activeTabIdClassName}`}
        type="button"
        onClick={onClickTabItem}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabs
