import React from 'react'

import 'bulma/css/bulma.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import { FaShoppingCart } from 'react-icons/fa'

export default class Main extends React.Component {
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

            Ex1: 0,
            Ex2: 0,
            Ex3: 0,
            Ex4: 0,
            Ex5: 0,
            Ex6: 0,
            Ex7: 0,
            Ex8: 0,
            Ex9: 0,
            Ex10: 0,
        }

        this.handleClick = this.handleClick.bind(this)
    }

    ItemAdd1 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            Item1: this.state.Item1 + 1,
        })
    }

    ItemRemove1 = () => {
        this.setState({
            Item1: this.state.Item1 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd2 = () => {
        this.setState({
            Item2: this.state.Item2 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ItemRemove2 = () => {
        this.setState({
            Item2: this.state.Item2 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd3 = () => {
        this.setState({
            Item3: this.state.Item3 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ItemRemove3 = () => {
        this.setState({
            Item3: this.state.Item3 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd4 = () => {
        this.setState({
            Item4: this.state.Item4 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ItemRemove4 = () => {
        this.setState({
            Item4: this.state.Item4 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd5 = () => {
        this.setState({
            Item5: this.state.Item5 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ItemRemove5 = () => {
        this.setState({
            Item5: this.state.Item5 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd6 = () => {
        this.setState({
            Item6: this.state.Item6 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ItemRemove6 = () => {
        this.setState({
            Item6: this.state.Item6 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd7 = () => {
        this.setState({
            Item7: this.state.Item7 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ItemRemove7 = () => {
        this.setState({
            Item7: this.state.Item7 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd8 = () => {
        this.setState({
            Item8: this.state.Item8 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ItemRemove8 = () => {
        this.setState({
            Item8: this.state.Item8 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd9 = () => {
        this.setState({
            Item9: this.state.Item9 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ItemRemove9 = () => {
        this.setState({
            Item9: this.state.Item9 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ExAdd1 = () => {
        this.setState({
            Ex1: this.state.Ex1 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ExRemove1 = () => {
        this.setState({
            Ex1: this.state.Ex1 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ExAdd2 = () => {
        this.setState({
            Ex2: this.state.Ex2 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ExRemove2 = () => {
        this.setState({
            Ex2: this.state.Ex2 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ExAdd3 = () => {
        this.setState({
            Ex3: this.state.Ex3 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ExRemove3 = () => {
        this.setState({
            Ex3: this.state.Ex3 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ExAdd4 = () => {
        this.setState({
            Ex4: this.state.Ex4 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ExRemove4 = () => {
        this.setState({
            Ex4: this.state.Ex4 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ExAdd5 = () => {
        this.setState({
            Ex5: this.state.Ex5 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ExRemove5 = () => {
        this.setState({
            Ex5: this.state.Ex5 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ExAdd6 = () => {
        this.setState({
            Ex6: this.state.Ex6 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ExRemove6 = () => {
        this.setState({
            Ex6: this.state.Ex6 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ExAdd7 = () => {
        this.setState({
            Ex7: this.state.Ex7 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ExRemove7 = () => {
        this.setState({
            Ex7: this.state.Ex7 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ExAdd8 = () => {
        this.setState({
            Ex8: this.state.Ex8 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ExRemove8 = () => {
        this.setState({
            Ex8: this.state.Ex8 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ExAdd9 = () => {
        this.setState({
            Ex9: this.state.Ex9 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ExRemove9 = () => {
        this.setState({
            Ex9: this.state.Ex9 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ExAdd10 = () => {
        this.setState({
            Ex10: this.state.Ex10 + 1,
            Itemcount: this.state.Itemcount + 1,
        })
    }

    ExRemove10 = () => {
        this.setState({
            Ex10: this.state.Ex10 - 1,
            Itemcount: this.state.Itemcount - 1,
        })
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

            Ex1: 0,
            Ex2: 0,
            Ex3: 0,
            Ex4: 0,
            Ex5: 0,
            Ex6: 0,
            Ex7: 0,
            Ex8: 0,
            Ex9: 0,
            Ex10: 0,

            checkoutDisplaymodal: !this.state.checkoutDisplaymodal,
        })
    }

    render() {
        return (
            <div className="App">
                <header>
                    <ul>
                        <li>
                            <span className="CartCountStyle">
                                {this.state.Itemcount === 0 ? (
                                    <button
                                        className="CheckoutBtnStyle button is-large is-dark"
                                        disabled
                                    >
                                        Your shopping cart is empty
                                    </button>
                                ) : (
                                    <button
                                        onClick={this.handleClick}
                                        className="CheckoutBtnStyle button is-large is-dark"
                                    >
                                        <span className="CartIcon">
                                            <FaShoppingCart />
                                        </span>
                                        Checkout now
                                    </button>
                                )}
                                <button className="CheckoutBtnStyle button is-large is-dark">
                                    {this.state.Itemcount}
                                </button>
                            </span>
                        </li>
                    </ul>
                    <br />
                </header>

                <div className="container">
                    <div>
                        <Modal
                            show={this.state.checkoutDisplaymodal}
                            onHide={() => this.handleClick()}
                            className="ModalStyle"
                        >
                            <Modal.Header closeButton>
                                <h1 className="ModalTitle">
                                    Your order is complete.
                                </h1>
                            </Modal.Header>
                            <Modal.Body>
                                <h5>
                                    Wait time for everything should be around 20
                                    minutes
                                </h5>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button
                                    className="CheckoutBtnStyle button is-large is-dark"
                                    onClick={() => this.handleClick()}
                                >
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>

                    <main className="row">
                        <hr />
                        <h1>Sides</h1>
                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Chips with Salsa</h1>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd4}
                                    aria-label={
                                        'Add Chips with Salsa to the cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item4}
                                </span>
                                <button
                                    onClick={this.ItemRemove4}
                                    disabled={this.state.Item4 === 0}
                                    aria-label={
                                        'Remove 1 order of Chips with Salsa from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                                <br />
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">French Fries</h1>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd5}
                                    aria-label={
                                        'Add noddles with eggs to the cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item5}
                                </span>
                                <button
                                    onClick={this.ItemRemove5}
                                    disabled={this.state.Item5 === 0}
                                    aria-label={
                                        'Remove 1 order of noddles with eggs from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                            </span>
                        </section>
                    </main>

                    <main className="row">
                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Jalapeño Boppers</h1>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd4}
                                    aria-label={
                                        'Add Chips with Salsa to the cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Ex4}
                                </span>
                                <button
                                    onClick={this.ExRemove4}
                                    disabled={this.state.Ex4 === 0}
                                    aria-label={
                                        'Remove 1 order of Chips with Salsa from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                                <br />
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Side salad</h1>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd5}
                                    aria-label={
                                        'Add noddles with eggs to the cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Ex5}
                                </span>
                                <button
                                    onClick={this.ExRemove5}
                                    disabled={this.state.Ex5 === 0}
                                    aria-label={
                                        'Remove 1 order of noddles with eggs from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Chicken tenders</h1>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd6}
                                    aria-label={
                                        'Add noddles with eggs to the cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Ex6}
                                </span>
                                <button
                                    onClick={this.ExRemove6}
                                    disabled={this.state.Ex6 === 0}
                                    aria-label={
                                        'Remove 1 order of noddles with eggs from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                            </span>
                        </section>

                        <hr />
                    </main>
                </div>
            </div>
        )
    }
}
