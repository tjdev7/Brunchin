import React, { useState } from 'react'
import { BsCartFill } from 'react-icons/bs'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import { Container } from 'react-grid-system'

import { IoFastFoodSharp } from 'react-icons/io5'

import HomeTab from './components/HomeTab'
import MenuItems from './components/MenuItems'
import CheckoutTab from './components/CheckoutTab'

import { Item1_SPS } from './assets/Item1_SPS.png'
import { Item2_BCP } from './assets/Item2_BCP.png'
import { Item3_BF } from './assets/Item3_BF.png'
import { Item4_CS } from './assets/Item4_CS.png'
import { Item5_BN } from './assets/Item5_BN.png'
import { Item6_CAP } from './assets/Item5_BN.png'
import { Item7_ENS } from './assets/Item7_ENS.png'
import { Item8_TE } from './assets/Item8_TE.png'

import './App.css'

// const Checkout =
// handleclick = Your cart is empty

// ItemSum - ItemSum

// CartSum - CartSum

// if (ItemSum = 0 && CartSum == 0) {
//    return Your cart is currently empty
//}

export const items = [
    {
        id: 1,
        pic: <IoFastFoodSharp />,
        name: 'Sweet Potato Salad',
        price: '8.64',
    },
    {
        id: 2,
        pic: <IoFastFoodSharp />,
        name: 'Brown Crust Pizza',
        price: '15.35',
    },
    {
        id: 3,
        pic: <IoFastFoodSharp />,
        name: 'Mega Burger with Fries',
        price: '14.71',
    },
    {
        id: 4,
        pic: <IoFastFoodSharp />,
        name: 'Chips with Salsa',
        price: '9.64',
    },
    {
        id: 5,
        pic: <IoFastFoodSharp />,
        name: 'Noodles with eggs',
        price: '17.24',
    },
    {
        id: 6,
        pic: <IoFastFoodSharp />,
        name: 'Cappuccino with foam',
        price: '7.84',
    },
    {
        id: 7,
        pic: <IoFastFoodSharp />,
        name: 'Pasta with Broccoli',
        price: '18.77',
    },
    {
        id: 8,
        pic: <IoFastFoodSharp />,
        name: 'Toast with fried eggs',
        price: '12.48',
    },
]

export default class App extends React.Component {
    state = {
        Itemcount: 0,
        CartSum: 0,
    }
    ItemAdd1 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 9.64,
        })
    }

    ItemRemove1 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - (9.64).toFixed(2),
        })
    }

    ItemAdd2 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + (15.35).toFixed(2),
        })
    }

    ItemRemove2 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - (15.35).toFixed(2),
        })
    }

    ItemAdd3 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + (14.71).toFixed(2),
        })
    }

    ItemRemove3 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - (14.71).toFixed(2),
        })
    }

    ItemAdd4 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + (9.64).toFixed(2),
        })
    }

    ItemRemove4 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - (9.64).toFixed(2),
        })
    }

    ItemAdd5 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + (17.24).toFixed(2),
        })
    }

    ItemRemove5 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - (17.24).toFixed(2),
        })
    }

    ItemAdd6 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + (7.84).toFixed(2),
        })
    }

    ItemRemove6 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - (7.84).toFixed(2),
        })
    }

    ItemAdd7 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + (18.77).toFixed(2),
        })
    }

    ItemRemove7 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - (18.77).toFixed(2),
        })
    }

    ItemAdd8 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + (12.48).toFixed(2),
        })
    }

    ItemRemove8 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - (12.48).toFixed(2),
        })
    }
    render() {
        return (
            <div className="App">
                <header>
                    <BrowserRouter>
                        <ul>
                            <li>
                                {' '}
                                <BsCartFill></BsCartFill>
                                Cart{' '}
                                <span className="CartCountStyle">
                                    <button className="CheckoutBtnStyle">
                                        Pay now: ${this.state.CartSum}
                                    </button>
                                </span>
                            </li>

                            <li>
                                <span className="CartCountStyle">
                                    {this.state.Itemcount}
                                </span>
                                Items
                            </li>

                            <Link to="/HomeTab">
                                <li>Home</li>
                            </Link>
                        </ul>
                        <br />
                        <Routes>
                            <Route path="/HomeTab" element={<HomeTab />} />
                            <Route
                                path="/CheckoutTab"
                                element={<CheckoutTab />}
                            />
                            <Route
                                path="/MenuItems"
                                element={<CheckoutTab />}
                            />
                        </Routes>
                    </BrowserRouter>
                </header>
                <div>
                    {items.map((item) => (
                        <Container>
                            <br />

                            <li className="ListStyle col">
                                <span className="ImgStyle">
                                    {item.pic}
                                    <br />
                                </span>
                                {item.name}
                                <br />${item.price}
                                <br />
                                <button onClick={this.ItemAdd1}>+</button>
                                <span className="currentcounts">
                                    {' '}
                                    Add to cart{' '}
                                </span>
                                <button onClick={this.ItemRemove1}>-</button>
                                <hr />
                                <br />
                            </li>
                        </Container>
                    ))}
                </div>
            </div>
        )
    }
}
