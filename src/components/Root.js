import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Header'
import App from './App'
import BoardDetails from './BoardDetails'
import InvalidUrl from './InvalidUrl'

const Root = ({ store }) => (
    <Provider store={store}>
        <Router>
            <Header />
            <Switch>
                <Route exact="true" path="/" component={App} />
                <Route path="/b/:id" component={BoardDetails} />
                <Route component={InvalidUrl} />
            </Switch>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root