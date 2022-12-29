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
            PriceTotal: 0,
            Item1: 0,
            Item1Price: 1.0,
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

                                {/* <button className="CheckoutBtnStyle button is-large is-dark">
                                    $0.00
                                     {this.state.PriceTotal}
                                </button> */}
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
                                <h5>
                                    Total number of items:{' '}
                                    {this.state.Itemcount}
                                </h5>
                                <h5>Total:</h5>
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
                        <h1>Entrees</h1>
                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Pasta dinner</h1>
                            <p className="PriceStyle">$18.74</p>
                            <br />
                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd7}
                                    aria-label={
                                        'Add 1 Pasta dinner to the cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item7}
                                </span>
                                <button
                                    onClick={this.ItemRemove7}
                                    disabled={this.state.Item7 === 0}
                                    aria-label={
                                        'Remove 1 Pasta dinner from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Toast with eggs</h1>
                            <p className="PriceStyle">$12.48</p>

                            <br />
                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd8}
                                    aria-label={
                                        'Add 1 order Toast with eggs to your cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item8}
                                </span>
                                <button
                                    onClick={this.ItemRemove8}
                                    disabled={this.state.Item8 === 0}
                                    aria-label={
                                        'Remove 1 order of Toast with eggs from the cart'
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

                            <h1 className="ItemTitle">Stromboli</h1>
                            <p className="PriceStyle">$9.74</p>

                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd9}
                                    aria-label={
                                        'Add 1 order of Stromboli to your cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item9}
                                </span>
                                <button
                                    onClick={this.ItemRemove9}
                                    disabled={this.state.Item9 === 0}
                                    aria-label={
                                        'Remove 1 order of Stromboli from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                                <br />
                            </span>
                        </section>
                        <br />
                    </main>

                    <main className="row">
                        <section className="ItemTab col">
                            <span className="ImgStyle">
                                <br />

                                <h1 className="ItemTitle">
                                    Potato Salad with Chicken
                                </h1>
                                <p className="PriceStyle">$8.64</p>
                            </span>

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd1}
                                    aria-label={
                                        'Add 1 order of Potato Salad from the cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item1}
                                </span>
                                <button
                                    onClick={this.ItemRemove1}
                                    disabled={this.state.Item1 === 0}
                                    aria-label={
                                        'Remove 1 order of Potato Salad from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">
                                Cheese Pizza with appetizer
                            </h1>
                            <p className="PriceStyle">$15.62</p>

                            <br />
                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd2}
                                    aria-label={
                                        'Add 1 order of Cheese Pizza with appetizer to your cart'
                                    }
                                    className="IItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item2}
                                </span>
                                <button
                                    onClick={this.ItemRemove2}
                                    disabled={this.state.Item2 === 0}
                                    aria-label={
                                        'Remove 1 order of Cheese Pizza with appetizer from the cart'
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

                            <h1 className="ItemTitle">Hamburger with fries</h1>
                            <p className="PriceStyle">$11.96</p>

                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd3}
                                    aria-label={
                                        'Add 1 order of Hamburger with fries to your cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item3}
                                </span>
                                <button
                                    onClick={this.ItemRemove3}
                                    disabled={this.state.Item3 === 0}
                                    aria-label={
                                        'Remove 1 order of Hamburger with fries from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                                <br />
                            </span>
                        </section>
                        <br />
                    </main>

                    <main className="row">
                        <section className="ItemTab col">
                            <span className="ImgStyle">
                                <br />

                                <h1 className="ItemTitle">Steak Dinner</h1>
                                <p className="PriceStyle">$22.98</p>
                                <br />
                            </span>

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd1}
                                    aria-label={
                                        'Add 1 order of Steak Dinner to the cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Ex1}
                                </span>
                                <button
                                    onClick={this.ExRemove1}
                                    disabled={this.state.Ex1 === 0}
                                    aria-label={
                                        'Remove 1 order of Steak Dinner from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Supreme Salad</h1>
                            <p className="PriceStyle">$17.58</p>
                            <br />
                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd2}
                                    aria-label={
                                        'Add 1 order of Supreme Salad to your cart'
                                    }
                                    className="IItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Ex2}
                                </span>
                                <button
                                    onClick={this.ExRemove2}
                                    disabled={this.state.Ex2 === 0}
                                    aria-label={
                                        'Remove 1 order of Supreme Salad from the cart'
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

                            <h1 className="ItemTitle">Duck Dinner</h1>
                            <p className="PriceStyle">$19.98</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd3}
                                    aria-label={
                                        'Add 1 order of Duck Dinner to your cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Ex3}
                                </span>
                                <button
                                    onClick={this.ExRemove3}
                                    disabled={this.state.Ex3 === 0}
                                    aria-label={
                                        'Remove 1 order of Duck Dinner from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                                <br />
                            </span>
                        </section>
                        <br />
                    </main>

                    <main className="row">
                        <hr />
                        <h1>Sides</h1>
                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Chips with Salsa</h1>
                            <p className="PriceStyle">$9.72</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd4}
                                    aria-label={
                                        'Add 1 order of Chips with Salsa to the cart'
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
                            <p className="PriceStyle">$6.44</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd5}
                                    aria-label={
                                        'Add 1 order of French Fries to the cart'
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
                                        'Remove 1 order of French Fries from the cart'
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
                            <p className="PriceStyle">$8.26</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd4}
                                    aria-label={
                                        'Add 1 order of Jalapeño Boppers to the cart'
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
                                        'Remove 1 order of Jalapeño Boppers from the cart'
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
                            <p className="PriceStyle">$4.54</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd5}
                                    aria-label={
                                        'Add 1 order of Side salad to the cart'
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
                                        'Remove 1 order of Side salad from the cart'
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
                            <p className="PriceStyle">$6.50</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd6}
                                    aria-label={
                                        'Add 1 order of Chicken tenders to the cart'
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
                                        'Remove 1 order of Chicken tenders from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                            </span>
                        </section>

                        <hr />
                    </main>

                    <main className="row">
                        <h1>Drinks</h1>
                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Cup of Coffee</h1>
                            <p className="PriceStyle">$4.50</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd6}
                                    aria-label={
                                        'Add 1 order of Cup of Coffee to the cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item6}
                                </span>
                                <button
                                    onClick={this.ItemRemove6}
                                    disabled={this.state.Item6 === 0}
                                    aria-label={
                                        'Remove 1 order of Cup of Coffee from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Smoothie</h1>
                            <p className="PriceStyle">$5.65</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd9}
                                    aria-label={
                                        'Add 1 order of smoothie to your cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item9}
                                </span>
                                <button
                                    onClick={this.ItemRemove9}
                                    disabled={this.state.Item9 === 0}
                                    aria-label={
                                        'Remove 1 order of Smoothie from the cart'
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

                            <h1 className="ItemTitle">Cola Soda</h1>
                            <p className="PriceStyle">$2.64</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd7}
                                    aria-label={
                                        'Add 1 order of Cola Soda to the cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Ex7}
                                </span>
                                <button
                                    onClick={this.ExRemove7}
                                    disabled={this.state.Ex7 === 0}
                                    aria-label={
                                        'Remove 1 order of Cola Soda from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Diet Cola Soda</h1>
                            <p className="PriceStyle">$2.68</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd8}
                                    aria-label={'Add 1 order of Diet Cola Soda'}
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Ex8}
                                </span>
                                <button
                                    onClick={this.ExRemove8}
                                    disabled={this.state.Ex8 === 0}
                                    aria-label={
                                        'Remove 1 order of Diet Cola Soda'
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

                            <h1 className="ItemTitle">Lemonade</h1>
                            <p className="PriceStyle">$2.70</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd9}
                                    aria-label={
                                        'Add 1 order of Lemonade to the cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Ex9}
                                </span>
                                <button
                                    onClick={this.ExRemove9}
                                    disabled={this.state.Ex9 === 0}
                                    aria-label={
                                        'Remove 1 order of Lemonade from the cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <br />

                            <h1 className="ItemTitle">Iced tea</h1>
                            <p className="PriceStyle">$2.70</p>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ExAdd10}
                                    aria-label={
                                        'Add 1 order of Iced tea to your cart'
                                    }
                                    className="ItemAdd button OptMenuStyle is-success"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Ex10}
                                </span>
                                <button
                                    onClick={this.ExRemove10}
                                    disabled={this.state.Ex10 === 0}
                                    aria-label={
                                        'Remove 1 order of Iced tea from your cart'
                                    }
                                    className="ItemRemove button OptMenuStyle is-danger"
                                >
                                    -
                                </button>
                            </span>
                        </section>
                    </main>
                    <br />
                    <br />
                </div>
            </div>
        )
    }
}
