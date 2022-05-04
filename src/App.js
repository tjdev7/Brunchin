import React from 'react'

import 'bulma/css/bulma.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Main from './components/Main'

import './App.css'
export default class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        )
    }
}
