import React from 'react'

import 'bulma/css/bulma.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FaShoppingCart } from 'react-icons/fa'

import item1_SPS from './assets/item1_SPS.png'
import item2_BCP from './assets/item2_BCP.png'
import item3_BF from './assets/item3_BF.png'
import item4_CS from './assets/item4_CS.png'
import item5_BN from './assets/item5_BN.png'
import item6_CAP from './assets/item6_CAP.png'
import item7_ENS from './assets/item7_ENS.png'
import item8_TE from './assets/item8_TE.png'
import item9_Sm from './assets/item9_Sm.png'

import './App.css'
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
        return (
            <div className="App">
                <header>
                    <ul>
                        <li>
                            <span className="CartCountStyle">
                                {/* {this.state.Itemcount} items */}

                                {/* <button
                                    disabled
                                    className="CheckoutBtnStyle button is-large is-black is-rounded"
                                >
                                    <span className="CartIcon">
                                        <FaShoppingCart />
                                    </span>
                                    Checkout now
                                </button> */}

                                {this.state.Item4 !== 0 && (
                                    <button
                                        onClick={this.handleClick}
                                        className="CheckoutBtnStyle button is-large is-black is-rounded"
                                    >
                                        <span className="CartIcon">
                                            <FaShoppingCart />
                                        </span>
                                        Checkout now
                                    </button>
                                )}
                            </span>
                        </li>
                    </ul>
                    <br />
                </header>

                <div className="container">
                    {/* <main className="row">
                        <br />
                        <section className="ItemTab">
                            <span className="ImgStyle">
                                <img
                                    src={item1_SPS}
                                    alt="Potato Salad - Item 1"
                                />
                                <h1 className="ItemTitle">Potato Salad</h1>
                            </span>

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd1}
                                    ariaLabel={
                                        'Add Sweet Potato Salad for $9.64'
                                    }
                                    className="ItemAdd button is-success is-rounded"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item1}
                                </span>
                                <button
                                    onClick={this.ItemRemove1}
                                    ariaLabel={
                                        'Remove 1 order of Sweet Potato Salad from the cart and subtract $9.64'
                                    }
                                    className="ItemRemove button is-danger is-rounded"
                                >
                                    -
                                </button>
                                <br />
                               
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <span className="ImgStyle">
                                <img
                                    src={item2_BCP}
                                    alt="Cheese Pizza - item 2"
                                />
                            </span>
                            <h1 className="ItemTitle">Cheese Pizza</h1>

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd2}
                                    ariaLabel={
                                        'Add Brown Crust Pizza for $15.35'
                                    }
                                    className="ItemAdd button is-success is-rounded"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item2}
                                </span>
                                <button
                                    onClick={this.ItemRemove2}
                                    ariaLabel={
                                        'Remove 1 order of Brown Crust Pizza from the cart and subtract $15.35'
                                    }
                                    className="ItemRemove button is-danger is-rounded"
                                >
                                    -
                                </button>
                            </span>
                            <br />
                            
                        </section>

                        <section className="ItemTab col">
                            <span className="ImgStyle">
                                <img
                                    src={item3_BF}
                                    alt="Burger combo - item 3"
                                />
                            </span>
                            <h1 className="ItemTitle">HamBurger combo</h1>

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd3}
                                    ariaLabel={
                                        'Add Burger combo'}
                                    className="ItemAdd button is-success is-rounded"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item3}
                                </span>
                                <button
                                    onClick={this.ItemRemove3}
                                    ariaLabel={ 'Remove 1 order of Burger combo' }
                                    className="ItemRemove button is-danger is-rounded"
                                >
                                    -
                                </button>
                                
                                
                            </span>
                        </section>
                    </main> */}

                    <main className="row">
                        <section className="ItemTab col">
                            <span className="ImgStyle">
                                <img
                                    src={item4_CS}
                                    alt="Chips with Salsa - item 4"
                                />
                            </span>
                            <h1 className="ItemTitle">Chips with Salsa</h1>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd4}
                                    ariaLabel={
                                        'Add Chips with Salsa to the cart'
                                    }
                                    className="ItemAdd button is-success is-rounded"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item4}
                                </span>
                                <button
                                    onClick={this.ItemRemove4}
                                    ariaLabel={
                                        'Remove 1 order of Chips with Salsa from the cart'
                                    }
                                    className="ItemRemove button is-danger is-rounded"
                                >
                                    -
                                </button>
                                <br />
                            </span>
                        </section>
                        <section className="ItemTab col">
                            <span className="ImgStyle">
                                <img
                                    src={item5_BN}
                                    alt="Udon Noodles - item 5"
                                />
                            </span>
                            <h1 className="ItemTitle">Udon Noodles</h1>
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd5}
                                    ariaLabel={
                                        'Add noddles with eggs to the cart'
                                    }
                                    className="ItemAdd button is-success is-rounded"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item5}
                                </span>
                                <button
                                    onClick={this.ItemRemove5}
                                    ariaLabel={
                                        'Remove 1 order of noddles with eggs from the cart'
                                    }
                                    className="ItemRemove button is-danger is-rounded"
                                >
                                    -
                                </button>
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <span className="ImgStyle">
                                <img
                                    src={item6_CAP}
                                    alt="Cappuccino - item 6"
                                />
                            </span>
                            <h1 className="ItemTitle">Cappuccino</h1>
                            <br />
                            <br />
                            <br />
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd6}
                                    ariaLabel={'Add Cappuccino to the cart'}
                                    className="ItemAdd button is-success is-rounded"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item6}
                                </span>
                                <button
                                    onClick={this.ItemRemove6}
                                    ariaLabel={
                                        'Remove 1 order of Cappuccino from the cart'
                                    }
                                    className="ItemRemove button is-danger is-rounded"
                                >
                                    -
                                </button>
                                <br />
                            </span>
                        </section>
                    </main>
                    <main className="row">
                        <section className="ItemTab col">
                            <span className="ImgStyle">
                                <img
                                    src={item7_ENS}
                                    alt="Pasta dinner - item 7"
                                />
                            </span>
                            <h1 className="ItemTitle">Pasta dinner</h1>
                            <br />
                            <br />
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd7}
                                    ariaLabel={
                                        'Add Pasta with Broccoli for $18.77'
                                    }
                                    className="ItemAdd button is-success is-rounded"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item7}
                                </span>
                                <button
                                    onClick={this.ItemRemove7}
                                    ariaLabel={
                                        'Remove 1 order of Pasta with Broccoli from the cart and subtract $18.77'
                                    }
                                    className="ItemRemove button is-danger is-rounded"
                                >
                                    -
                                </button>
                                <br />
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <img
                                src={item8_TE}
                                alt="Toast with fried eggs - item 8"
                            />
                            <h1 className="ItemTitle">Toast w/ eggs</h1>

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd8}
                                    ariaLabel={
                                        'Add Toast with fried eggs to your cart'
                                    }
                                    className="ItemAdd button is-success is-rounded"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item8}
                                </span>
                                <button
                                    onClick={this.ItemRemove8}
                                    ariaLabel={
                                        'Remove 1 order of Toast with fried eggs from the cart and subtract $12.48'
                                    }
                                    className="ItemRemove button is-danger is-rounded"
                                >
                                    -
                                </button>
                                <br />
                            </span>
                        </section>

                        <section className="ItemTab col">
                            <img src={item9_Sm} alt="Smoothie - item 9" />
                            <h1 className="ItemTitle">Smoothie</h1>
                            <br />
                            <br />
                            <br />

                            <span className="OrderTab">
                                <button
                                    onClick={this.ItemAdd9}
                                    ariaLabel={'Add 1 smoothie to your cart'}
                                    className="ItemAdd button is-success is-rounded"
                                >
                                    +
                                </button>
                                <span className="ItemCountCurrent">
                                    {this.state.Item9}
                                </span>
                                <button
                                    onClick={this.ItemRemove9}
                                    ariaLabel={
                                        'Remove 1 order of Toast with fried eggs from the cart and subtract $12.48'
                                    }
                                    className="ItemRemove button is-danger is-rounded"
                                >
                                    -
                                </button>
                                <br />
                            </span>
                        </section>
                        <br />
                    </main>
                </div>
            </div>
        )
    }
}
