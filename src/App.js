import React from 'react'

import 'bulma/css/bulma.min.css'
// import { BsCartFill } from 'react-icons/bs'
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

// import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

// import { Container, Row, Col } from 'react-grid-system'

// import HomeTab from './components/HomeTab'

// import MenuItems from './components/MenuItems'
// import CheckoutTab from './components/CheckoutTab'

import item1_SPS from './assets/item1_SPS.png'
import item2_BCP from './assets/item2_BCP.png'
import item3_BF from './assets/item3_BF.png'
import item4_CS from './assets/item4_CS.png'
import item5_BN from './assets/item5_BN.png'
import item6_CAP from './assets/item6_CAP.png'
import item7_ENS from './assets/item7_ENS.png'
import item8_TE from './assets/item8_TE.png'

import './App.css'
export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { Itemcount: 0, CartSum: 0, Item1: 0, Item2: 0, Item3: 0, Item4: 0, Item5: 0, Item6: 0, Item7: 0, Item8: 0  }

        this.handleClick = this.handleClick.bind(this)
    }

    ItemAdd1 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 9,
            Item1: this.state.Item1 + 1
        })
    }

    ItemRemove1 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount - 1,
            // CartSum: this.state.CartSum - 9,
            Item1: this.state.Item1 - 1
        })
    }

    ItemAdd2 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount + 1,
            // CartSum: this.state.CartSum + 15,
            Item2: this.state.Item2 + 1
        })
    }

    ItemRemove2 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount - 1,
            // CartSum: this.state.CartSum - 15,
            Item2: this.state.Item2 - 1
        })
    }

    ItemAdd3 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount + 1,
            // CartSum: this.state.CartSum + 14,
            Item3: this.state.Item3 + 1
        })
    }

    ItemRemove3 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount - 1,
            // CartSum: this.state.CartSum - 14,
            Item3: this.state.Item3 - 1
        })
    }

    ItemAdd4 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount + 1,
            // CartSum: this.state.CartSum + 8,
            Item4: this.state.Item4 + 1
        })
    }

    ItemRemove4 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount - 1,
            // CartSum: this.state.CartSum - 8,
            Item4: this.state.Item4 - 1
        })
    }

    ItemAdd5 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount + 1,
            // CartSum: this.state.CartSum + 17,
            Item5: this.state.Item5 + 1
        })
    }

    ItemRemove5 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount - 1,
            // CartSum: this.state.CartSum - 17,
            Item5: this.state.Item5 - 1
        })
    }

    ItemAdd6 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount + 1,
            // CartSum: this.state.CartSum + 7,
            Item6: this.state.Item6 + 1
        })
    }

    ItemRemove6 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount - 1,
            // CartSum: this.state.CartSum - 7,
            Item6: this.state.Item6 - 1
        })
    }

    ItemAdd7 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount + 1,
            // CartSum: this.state.CartSum + 18,
            Item7: this.state.Item7 + 1
        })
    }

    ItemRemove7 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount - 1,
            // CartSum: this.state.CartSum - 18,
            Item7: this.state.Item7 - 1
        })
    }

    ItemAdd8 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount + 1,
            // CartSum: this.state.CartSum + 12,
            Item8: this.state.Item8 + 1
        })
    }

    ItemRemove8 = () => {
        this.setState({
            // Itemcount: this.state.Itemcount - 1,
            // CartSum: this.state.CartSum - 12,
            Item8: this.state.Item8 - 1
        })
    }
    handleClick() {
        this.setState({ Itemcount: 0, CartSum: 0, Item1: 0, Item2: 0, Item3: 0, Item4: 0, Item5: 0, Item6: 0, Item7: 0, Item8: 0  })
        // if (Item1 = 0) {
        //     alert('Please add items to your cart before doing a checkout')
        // } else {
            alert('Your order has been made')
        // }
        

    }

    render() {
        return (
            <div className="App">
                <header>
                    <ul>
                        <li>
                            {/* {' '}
                            <BsCartFill></BsCartFill>
                            Cart{' '} */}
                            <span className="CartCountStyle">
                                <button
                                    onClick={this.handleClick}
                                    className="CheckoutBtnStyle button is-large"
                                >
                                    Checkout now
                                    {/* Pay now: ${this.state.CartSum} */}
                                </button>
                            </span>
                        </li>

                        {/* <li>
                            <span className="CartCountStyle">
                                {this.state.Itemcount}
                            </span>
                            Items
                        </li> */}
                    </ul>
                    <br />
                </header>
                <div>
                    <br />
                    <section className="ItemTab">
                        <span className="ImgStyle">
                            <img src={item1_SPS} alt="item 1" />
                            <h1 className="ItemTitle">Sweet Potato Salad</h1>
                        </span>

                        <span className="OrderTab">
                            <span className="Adding">Add to cart </span>
                            <button
                                onClick={this.ItemAdd1}
                                ariaLabel={'Add Sweet Potato Salad for $9.64'}
                                className="ItemAdd button is-success"
                            >
                                +
                            </button>
                            <span className="ItemCountCurrent">{this.state.Item1}</span>
                            <button
                                onClick={this.ItemRemove1}
                                ariaLabel={
                                    'Remove 1 order of Sweet Potato Salad from the cart and subtract $9.64'
                                }
                                className="ItemRemove button is-danger"
                            >
                                -
                            </button>
                        </span>
                    </section>

                    <section className="ItemTab">
                        <span className="ImgStyle">
                            <img src={item2_BCP} alt="item 2" />
                        </span>
                        <h1 className="ItemTitle">Brown Crust Pizza</h1>

                        <span className="OrderTab">
                            <span className="Adding">Add to cart</span>
                            <button
                                onClick={this.ItemAdd2}
                                ariaLabel={'Add Brown Crust Pizza for $15.35'}
                                className="ItemAdd button is-success"
                            >
                                +
                            </button>
                            <span className="ItemCountCurrent">{this.state.Item2}</span>
                            <button
                                onClick={this.ItemRemove2}
                                ariaLabel={
                                    'Remove 1 order of Brown Crust Pizza from the cart and subtract $15.35'
                                }
                                className="ItemRemove button is-danger"
                            >
                                -
                            </button>
                        </span>
                    </section>

                    <section className="ItemTab">
                        <span className="ImgStyle">
                            <img src={item3_BF} alt="item 3" />
                        </span>
                        <h1 className="ItemTitle">Mega Burger with Fries</h1>

                        <span className="OrderTab">
                            <span className="Adding">Add to cart</span>
                            <button
                                onClick={this.ItemAdd3}
                                ariaLabel={
                                    'Add Mega Burger with Fries for $14.71'
                                }
                                className="ItemAdd button is-success"
                            >
                                +
                            </button>
                            <span className="ItemCountCurrent">{this.state.Item3}</span>
                            <button
                                onClick={this.ItemRemove3}
                                ariaLabel={
                                    'Remove 1 order of Mega Burger with Fries  from the cart and subtract $14.71'
                                }
                                className="ItemRemove button is-danger"
                            >
                                -
                            </button>
                        </span>
                    </section>
                    <section className="ItemTab">
                        <span className="ImgStyle">
                            <img src={item4_CS} alt="item 4" />
                        </span>
                        <h1 className="ItemTitle">Chips with Salsa</h1>

                        <span className="OrderTab">
                            <span className="Adding">Add to cart </span>
                            <button
                                onClick={this.ItemAdd4}
                                ariaLabel={'Add Chips with Salsa for $8.15'}
                                className="ItemAdd button is-success"
                            >
                                +
                            </button>
                            <span className="ItemCountCurrent">{this.state.Item4}</span>
                            <button
                                onClick={this.ItemRemove4}
                                ariaLabel={
                                    'Remove 1 order of Chips with Salsa from the cart and subtract $8.15'
                                }
                                className="ItemRemove button is-danger"
                            >
                                -
                            </button>
                        </span>
                    </section>
                    <section className="ItemTab">
                        <span className="ImgStyle">
                            <img src={item5_BN} alt="item 5" />
                        </span>
                        <h1 className="ItemTitle">Noodles with eggs</h1>

                        <span className="OrderTab">
                            <span className="Adding">Add to cart </span>
                            <button
                                onClick={this.ItemAdd5}
                                ariaLabel={'Add noddles with eggs for $17.24'}
                                className="ItemAdd button is-success"
                            >
                                +
                            </button>
                            <span className="ItemCountCurrent">{this.state.Item5}</span>
                            <button
                                onClick={this.ItemRemove5}
                                ariaLabel={
                                    'Remove 1 order of noddles with eggs from the cart and subtract $17.24'
                                }
                                className="ItemRemove button is-danger"
                            >
                                -
                            </button>
                        </span>
                    </section>
                    <section className="ItemTab">
                        <span className="ImgStyle">
                            <img src={item6_CAP} alt="item 6" />
                        </span>
                        <h1 className="ItemTitle">Cappuccino with foam</h1>

                        <span className="OrderTab">
                            <span className="Adding">Add to cart </span>
                            <button
                                onClick={this.ItemAdd6}
                                ariaLabel={'Add Cappuccino with foam for $7.84'}
                                className="ItemAdd button is-success"
                            >
                                +
                            </button>
                            <span className="ItemCountCurrent">{this.state.Item6}</span>
                            <button
                                onClick={this.ItemRemove6}
                                ariaLabel={
                                    'Remove 1 order of Cappuccino with foam from the cart and subtract $7.84'
                                }
                                className="ItemRemove button is-danger"
                            >
                                -
                            </button>
                        </span>
                    </section>

                    <section className="ItemTab">
                        <span className="ImgStyle">
                            <img src={item7_ENS} alt="item 7" />
                        </span>
                        <h1 className="ItemTitle">Pasta with Broccoli</h1>

                        <span className="OrderTab">
                            <span className="Adding">Add to cart </span>
                            <button
                                onClick={this.ItemAdd7}
                                ariaLabel={'Add Pasta with Broccoli for $18.77'}
                                className="ItemAdd button is-success"
                            >
                                +
                            </button>
                            <span className="ItemCountCurrent">{this.state.Item7}</span>
                            <button
                                onClick={this.ItemRemove7}
                                ariaLabel={
                                    'Remove 1 order of Pasta with Broccoli from the cart and subtract $18.77'
                                }
                                className="ItemRemove button is-danger"
                            >
                                -
                            </button>
                        </span>
                    </section>

                    <section className="ItemTab">
                        {/* <span className="ImgStyle">
                            <img src={item8_TE} alt="item 8" />
                        </span> */}
                        <img src={item8_TE} alt="item 8" />
                        <h1 className="ItemTitle">Toast with fried eggs</h1>

                        <span className="OrderTab">
                            <span className="Adding">$147.22 </span>
                            <button
                                onClick={this.ItemAdd8}
                                ariaLabel={
                                    'Add Toast with fried eggs for $12.48'
                                }
                                className="ItemAdd button is-success"
                            >
                                +
                            </button>
                            <span className="ItemCountCurrent">{this.state.Item8}</span>
                            <button
                                onClick={this.ItemRemove8}
                                ariaLabel={
                                    'Remove 1 order of Toast with fried eggs from the cart and subtract $12.48'
                                }
                                className="ItemRemove button is-danger"
                            >
                                -
                            </button>
                            <span className="Adding">Add to cart </span>
                        </span>
                    </section>
                    <br />
                </div>
            </div>
        )
    }
}
