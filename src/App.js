import React from 'react'
import { BsCartFill } from 'react-icons/bs'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

import { Container, Row, Col } from 'react-grid-system'

import HomeTab from './components/HomeTab'

// Drafts for eventual seperated UI components
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
        this.state = { Itemcount: 0, CartSum: 0 }

        this.handleClick = this.handleClick.bind(this)
    }

    // const =
    // if Cartsum = 0;
    // button disabled

    // Sum/Subtract Command Array for each menu item
    // Will get refactored into a more slim codebased soon
    ItemAdd1 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 9,
        })
    }

    ItemRemove1 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 9,
        })
    }

    ItemAdd2 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 15,
        })
    }

    ItemRemove2 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 15,
        })
    }

    ItemAdd3 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 14,
        })
    }

    ItemRemove3 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 14,
        })
    }

    ItemAdd4 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 8,
        })
    }

    ItemRemove4 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 8,
        })
    }

    ItemAdd5 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 17,
        })
    }

    ItemRemove5 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 17,
        })
    }

    ItemAdd6 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 7,
        })
    }

    ItemRemove6 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 7,
        })
    }

    ItemAdd7 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 18,
        })
    }

    ItemRemove7 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 18,
        })
    }

    ItemAdd8 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 12,
        })
    }

    ItemRemove8 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 12,
        })
    }
    // resets cart and item count back to 0
    handleClick() {
        this.setState({ Itemcount: 0, CartSum: 0 })
        alert('Your order has been made')

        // Draft for conditional
        // if (Itemcount = 0)
        //     return alert('test')
    }

    render() {
        return (
            <div className="App">
                <header>
                    {/* <BrowserRouter> */}
                    <ul>
                        <li>
                            {' '}
                            <BsCartFill></BsCartFill>
                            Cart{' '}
                            <span className="CartCountStyle">
                                <button
                                    onClick={this.handleClick}
                                    className="CheckoutBtnStyle"
                                >
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

                    </ul>
                    <br />
                    {/* <Routes>
                            <Route path="/HomeTab" element={<HomeTab />} />
                        </Routes> */}
                    {/* </BrowserRouter> */}
                </header>
                <div>
                    {/* Display for menu items with responsive design grid. Made using react-grid-system */}
                        <br />
  <section>
                                <span className="ImgStyle">
                                    <img src={item1_SPS} alt="item 1" />
                                    <h1 className="ItemTitle">
                                        Sweet Potato Salad
                                    </h1>
                                </span>

                            <span className="OrderTab">
                                    <button
                                        onClick={this.ItemAdd1}
                                        ariaLabel={
                                            'Add Sweet Potato Salad for $9.64'
                                        }
                                        className="ItemAdd"
                                    >
                                        +
                                    </button>
                                    ######
                                    <button
                                        // disabled={true}
                                        onClick={this.ItemRemove1}
                                        ariaLabel={
                                            'Remove 1 order of Sweet Potato Salad from the cart and subtract $9.64'
                                        }
                                        className="ItemRemove"
                                    >
                                        -
                                    </button>
                                    </span>
                                    <hr />
                                    </section>



<section>
                    <span className="ImgStyle">
                        <img src={item2_BCP} alt="item 2" />
                    </span>
                    <h1 className="ItemTitle">Brown Crust Pizza</h1>
                    <span className="OrderTab">         
                        <button
                            onClick={this.ItemAdd2}
                            ariaLabel={'Add Brown Crust Pizza for $15.35'}
                            className="ItemAdd"
                        >
                            +
                        </button>
                        #####
                        <button
                            onClick={this.ItemRemove2}
                            ariaLabel={
                                'Remove 1 order of Brown Crust Pizza from the cart and subtract $15.35'
                            }
                            className="ItemRemove"
                        >
                            -
                        </button>
                        </span>
                        <hr />

                    </section>

                    <section>
                    <span className="ImgStyle">
                        <img src={item3_BF} alt="item 3" />
                    </span>
                    <h1 className="ItemTitle">Mega Burger with Fries</h1>
                    <span className="OrderTab">
                        <button
                            onClick={this.ItemAdd3}
                            ariaLabel={'Add Mega Burger with Fries for $14.71'}
                            className="ItemAdd"
                        >
                            +
                        </button>
                        ######
                        <button
                            onClick={this.ItemRemove3}
                            ariaLabel={
                                'Remove 1 order of Mega Burger with Fries  from the cart and subtract $14.71'
                            }
                            className="ItemRemove"
                        >
                            -
                        </button>
                        </span>
                        <hr />

                    </section>
                    <section>
                    <span className="ImgStyle">
                        <img src={item4_CS} alt="item 4" />
                    </span>
                    <h1 className="ItemTitle">Chips with Salsa</h1>
                    <span className="OrderTab">
                        <button
                            onClick={this.ItemAdd4}
                            ariaLabel={'Add Chips with Salsa for $8.15'}
                            className="ItemAdd"
                        >
                            +
                        </button>
                        #####
                        <button
                            onClick={this.ItemRemove4}
                            ariaLabel={
                                'Remove 1 order of Chips with Salsa from the cart and subtract $8.15'
                            }
                            className="ItemRemove"
                        >
                            -
                        </button>
                        </span>
                        <hr />
                        </section>
                    <section>
                    <span className="ImgStyle">
                        <img src={item5_BN} alt="item 5" />
                    </span>
                    <h1 className="ItemTitle">Noodles with eggs</h1>
                    <span className="OrderTab">
                    <button
                        onClick={this.ItemAdd5}
                        ariaLabel={'Add noddles with eggs for $17.24'}
                        className="ItemAdd"
                    >
                        +
                    </button>
                    #####
                    <button
                        onClick={this.ItemRemove5}
                        ariaLabel={
                            'Remove 1 order of noddles with eggs from the cart and subtract $17.24'
                        }
                        className="ItemRemove"
                    >
                        -
                    </button>
                    </span>
                    <hr />
                    </section>
                    <section>
                    <span className="ImgStyle">
                        <img src={item6_CAP} alt="item 6" />
                    </span>
                    <h1 className="ItemTitle">Cappuccino with foam</h1>
                    <span className="OrderTab">
                    <button
                        onClick={this.ItemAdd6}
                        ariaLabel={'Add Cappuccino with foam for $7.84'}
                        className="ItemAdd"
                    >
                        +
                    </button>
                    ######
                    <button
                        onClick={this.ItemRemove6}
                        ariaLabel={
                            'Remove 1 order of Cappuccino with foam from the cart and subtract $7.84'
                        }
                        className="ItemRemove"
                    >
                        -
                    </button>
                    </span>
                    <hr />
                    </section>
                    <br />
                    <section>

                        <span className="ImgStyle">
                            <img src={item7_ENS} alt="item 7" />
                        </span>
                        <h1 className="ItemTitle">Pasta with Broccoli</h1>
                        <span className="OrderTab">
                        <button
                            onClick={this.ItemAdd7}
                            ariaLabel={'Add Pasta with Broccoli for $18.77'}
                            className="ItemAdd"
                        >
                            +
                        </button>
                        ####
                        <button
                            onClick={this.ItemRemove7}
                            ariaLabel={
                                'Remove 1 order of Pasta with Broccoli from the cart and subtract $18.77'
                            }
                            className="ItemRemove"
                        >
                            -
                        </button>
                        </span>
                        <hr />
                    </section>
                    <br />
                    <br />
                    <section>
                        <span className="ImgStyle">
                            <img src={item8_TE} alt="item 8" />
                        </span>
                        <h1 className="ItemTitle">Toast with fried eggs</h1>
                        <span className="OrderTab">
                        <button
                            onClick={this.ItemAdd8}
                            ariaLabel={'Add Toast with fried eggs for $12.48'}
                            className="ItemAdd"
                        >
                            +
                        </button>
                        ####
                        <button
                            onClick={this.ItemRemove8}
                            ariaLabel={
                                'Remove 1 order of Toast with fried eggs from the cart and subtract $12.48'
                            }
                            className="ItemRemove"
                        >
                            -
                        </button>
                        </span>
                        <hr />
                    </section>
                    <br />
                </div>
            </div>
        )
    }
}
