import React from 'react'
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Itemcount: 0,
            CartSum: 0,
            Item1: 0,
            Item2: 0,
            Item3: 0,
            Item4: 0,
            Item5: 0,
            Item6: 0,
            Item7: 0,
            Item8: 0,
            Item9: 0,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    ItemAdd1 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            // CartSum: this.state.CartSum + 9,
            Item1: this.state.Item1 + 1,
        })
    }

    ItemRemove1 = () => {
        if (this.state.Item1 > 0) {
            this.setState((lastState) => ({ Item1: lastState.Item1 - 1 }))
        }
    }

    ItemAdd2 = () => {
        this.setState({
            Item2: this.state.Item2 + 1,
        })
    }

    ItemRemove2 = () => {
        if (this.state.Item2 > 0) {
            this.setState((lastState) => ({ Item2: lastState.Item2 - 1 }))
        }
    }

    ItemAdd3 = () => {
        this.setState({
            Item3: this.state.Item3 + 1,
        })
    }

    ItemRemove3 = () => {
        if (this.state.Item3 > 0) {
            this.setState((lastState) => ({ Item3: lastState.Item3 - 1 }))
        }
    }

    ItemAdd4 = () => {
        this.setState({
            Item4: this.state.Item4 + 1,
        })
    }

    ItemRemove4 = () => {
        if (this.state.Item4 > 0) {
            this.setState((lastState) => ({ Item4: lastState.Item4 - 1 }))
        }
    }

    ItemAdd5 = () => {
        this.setState({
            Item5: this.state.Item5 + 1,
        })
    }

    ItemRemove5 = () => {
        if (this.state.Item5 > 0) {
            this.setState((lastState) => ({ Item5: lastState.Item5 - 1 }))
        }
    }

    ItemAdd6 = () => {
        this.setState({
            Item6: this.state.Item6 + 1,
        })
    }

    ItemRemove6 = () => {
        if (this.state.Item6 > 0) {
            this.setState((lastState) => ({ Item6: lastState.Item6 - 1 }))
        }
    }

    ItemAdd7 = () => {
        this.setState({
            Item7: this.state.Item7 + 1,
        })
    }

    ItemRemove7 = () => {
        if (this.state.Item7 > 0) {
            this.setState((lastState) => ({ Item7: lastState.Item7 - 1 }))
        }
    }

    ItemAdd8 = () => {
        this.setState({
            Item8: this.state.Item8 + 1,
        })
    }

    ItemRemove8 = () => {
        if (this.state.Item8 > 0) {
            this.setState((lastState) => ({ Item8: lastState.Item8 - 1 }))
        }
    }

    ItemAdd9 = () => {
        this.setState({
            Item9: this.state.Item9 + 1,
        })
    }

    ItemRemove9 = () => {
        if (this.state.Item9 > 0) {
            this.setState((lastState) => ({ Item9: lastState.Item9 - 1 }))
        }
    }

    handleClick() {
        this.setState({
            Itemcount: 0,
            CartSum: 0,
            Item1: 0,
            Item2: 0,
            Item3: 0,
            Item4: 0,
            Item5: 0,
            Item6: 0,
            Item7: 0,
            Item8: 0,
            Item9: 0,
        })
        alert('Your order has been made')
    }

    render() {
        return <div className="App"></div>
    }
}
