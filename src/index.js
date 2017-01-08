
import React from 'react'

const Tab = ({tabs, onClick, className, style, children}) => (
  <ul className={`nav nav-tabs${className ? ` ${className}` : ''}`} style={style}>
    {tabs.map((tab, i) =>
      <li key={i} className={tab.active ? 'active' : null}>
        <a href={tab.href} onClick={(e) => onClick(tab, e)}>
          {tab.text}
        </a>
      </li>
    )}
    {children}
  </ul>
)

Tab.propTypes = {
  tabs: React.PropTypes.array,
  onClick: React.PropTypes.func
}

export default Tab
