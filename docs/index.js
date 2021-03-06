
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, withRouter} from 'react-router'
import Tab from '../'

class App extends React.Component {

  state = {
    tabs: [
      {text: 'one', href: '/?set=one'},
      {text: 'two', href: '/?set=two'}
    ]
  }

  onClick = (tab, event) => {
    event.preventDefault()
    this.props.router.push(tab.href)
  }

  render () {
    const {pathname, search} = this.props.location
    const href = `${pathname}${search}`
    this.state.tabs.map(tab => { tab.active = tab.href === href })
    return (
      <div>
        <section>
          <Tab
            tabs={this.state.tabs}
            onClick={this.onClick}
          />
        </section>
        <section>
          <p>with custom class</p>
          <Tab
            className='nav-grey'
            tabs={this.state.tabs}
            onClick={this.onClick}
          />
        </section>
        <section>
          <p>with children</p>
          <Tab
            tabs={this.state.tabs}
            onClick={this.onClick}
          >
            <div className="hidden-xs btn-group pull-right">
              <a href="#" className="btn btn-default active">
                One
              </a>
              <a href="#" className="btn btn-default ">
                Two
              </a>
              <a href="#" className="btn btn-default ">
                Three
              </a>
            </div>
          </Tab>
        </section>
      </div>
    )
  }

}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={withRouter(App)} />
  </Router>
), document.getElementById('app'))
