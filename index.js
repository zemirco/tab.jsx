
import React from 'react'

const Tab = ({tabs, onClick, className, style}) => (
  <ul className={`nav nav-tabs${className ? ` ${className}` : ''}`} style={style}>
    {tabs.map((tab, i) =>
      <li key={i} className={tab.active ? 'active' : null}>
        <a href={tab.href} onClick={(e) => onClick(tab, e)}>
          {tab.text}
        </a>
      </li>
    )}
  </ul>
)

Tab.propTypes = {
  tabs: React.PropTypes.array,
  onClick: React.PropTypes.func
}

export default Tab
