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
    // Sum/Subtract Command Array for each menu item
    // Will get refactored into a more slim codebased soon
    ItemAdd1 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 9.64,
        })
    }

    ItemRemove1 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 9.64,
        })
    }

    ItemAdd2 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 15.35,
        })
    }

    ItemRemove2 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 15.35,
        })
    }

    ItemAdd3 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 14.71,
        })
    }

    ItemRemove3 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 14.71,
        })
    }

    ItemAdd4 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 8.15,
        })
    }

    ItemRemove4 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 8.15,
        })
    }

    ItemAdd5 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 17.24,
        })
    }

    ItemRemove5 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 17.24,
        })
    }

    ItemAdd6 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 7.84,
        })
    }

    ItemRemove6 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 7.84,
        })
    }

    ItemAdd7 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 18.77,
        })
    }

    ItemRemove7 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 18.77,
        })
    }

    ItemAdd8 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 12.48,
        })
    }

    ItemRemove8 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
            CartSum: this.state.CartSum - 12.48,
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
                        <li>Home</li>

                        {/* <Link to="/HomeTab">
                                <li>Home</li>
                            </Link> */}
                    </ul>
                    <br />
                    {/* <Routes>
                            <Route path="/HomeTab" element={<HomeTab />} />
                        </Routes> */}
                    {/* </BrowserRouter> */}
                </header>
                <div>
                    {/* Display for menu items with responsive design grid. Made using react-grid-system */}
                    <Container>
                        <br />
                        <Row>
                            <Col md={4}>
                                <span className="ImgStyle">
                                    <img src={item1_SPS} alt="item 1" />
                                </span>
                                <h1>Sweet Potato Salad</h1>
                                <h2>
                                    Price: $9.64
                                    <button onClick={this.ItemAdd1}>
                                        + <BsCartFill />
                                    </button>
                                    <button onClick={this.ItemRemove1}>
                                        -
                                    </button>
                                </h2>

                                <hr />
                                <span className="RatingsTabStyle">
                                    Average rating:
                                    <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                                    <AiOutlineStar /> <AiOutlineStar />{' '}
                                </span>
                                <hr />
                            </Col>
                            <Col md={4}>
                                <span className="ImgStyle">
                                    <img src={item2_BCP} alt="item 2" />
                                </span>
                                <h1>Brown Crust Pizza</h1>
                                <h2>
                                    Price: $15.35
                                    <button onClick={this.ItemAdd2}>
                                        + <BsCartFill />
                                    </button>
                                    <button onClick={this.ItemRemove2}>
                                        -
                                    </button>
                                </h2>

                                <hr />
                                <span className="RatingsTabStyle">
                                    Average rating:
                                    <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                                    <AiFillStar /> <AiOutlineStar />{' '}
                                </span>

                                <hr />
                            </Col>
                            <Col md={4}>
                                <span className="ImgStyle">
                                    <img src={item3_BF} alt="item 3" />
                                </span>
                                <h1>Mega Burger with Fries</h1>
                                <h2>
                                    Price: $14.71
                                    <button onClick={this.ItemAdd3}>
                                        + <BsCartFill />
                                    </button>
                                    <button onClick={this.ItemRemove3}>
                                        -
                                    </button>
                                </h2>

                                <hr />
                                <span className="RatingsTabStyle">
                                    Average rating:
                                    <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                                    <AiFillStar /> <AiOutlineStar />{' '}
                                </span>

                                <hr />
                            </Col>
                        </Row>
                        <br />
                        <br />

                        <Row>
                            <Col md={4}>
                                <span className="ImgStyle">
                                    <img src={item4_CS} alt="item 4" />
                                </span>
                                <h1>Chips with Salsa</h1>
                                <h2>
                                    Price: $8.15
                                    <button onClick={this.ItemAdd4}>
                                        + <BsCartFill />
                                    </button>
                                    <button onClick={this.ItemRemove4}>
                                        -
                                    </button>
                                </h2>

                                <hr />
                                <span className="RatingsTabStyle">
                                    Average rating:
                                    <AiFillStar /> <AiOutlineStar />{' '}
                                    <AiOutlineStar /> <AiOutlineStar />{' '}
                                    <AiOutlineStar />{' '}
                                </span>

                                <hr />
                            </Col>
                            <Col md={4}>
                                <span className="ImgStyle">
                                    <img src={item5_BN} alt="item 5" />
                                </span>
                                <h1>Noodles with eggs</h1>
                                <h2>
                                    Price: $17.24
                                    <button onClick={this.ItemAdd5}>
                                        + <BsCartFill />
                                    </button>
                                    <button onClick={this.ItemRemove5}>
                                        -
                                    </button>
                                </h2>

                                <hr />
                                <span className="RatingsTabStyle">
                                    Average rating:
                                    <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                                    <AiFillStar />
                                    <AiOutlineStar />{' '}
                                </span>

                                <hr />
                            </Col>
                            <Col md={4}>
                                <span className="ImgStyle">
                                    <img src={item6_CAP} alt="item 6" />
                                </span>
                                <h1>Cappuccino with foam</h1>
                                <h2>
                                    Price: $7.84{' '}
                                    <button onClick={this.ItemAdd6}>
                                        + <BsCartFill />
                                    </button>
                                    <button onClick={this.ItemRemove6}>
                                        -
                                    </button>
                                </h2>

                                <hr />
                                <span className="RatingsTabStyle">
                                    Average rating:
                                    <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                                    <AiFillStar /> <AiOutlineStar />{' '}
                                </span>

                                <hr />
                            </Col>
                        </Row>

                        <br />
                        <br />

                        <Row>
                            <Col md={4}>
                                <span className="ImgStyle">
                                    <img src={item7_ENS} alt="item 7" />
                                </span>
                                <h1>Pasta with Broccoli</h1>
                                <h2>
                                    Price: $18.77
                                    <button onClick={this.ItemAdd7}>
                                        + <BsCartFill />
                                    </button>
                                    <button onClick={this.ItemRemove7}>
                                        -
                                    </button>
                                </h2>

                                <hr />
                                <span className="RatingsTabStyle">
                                    Average rating:
                                    <AiFillStar /> <AiFillStar /> <AiFillStar />{' '}
                                    <AiFillStar /> <AiFillStar />{' '}
                                </span>

                                <hr />
                            </Col>
                            <Col md={4}>
                                <span className="ImgStyle">
                                    <img src={item8_TE} alt="item 8" />
                                </span>
                                <h1>Toast with fried eggs</h1>
                                <h2>
                                    Price: $12.48
                                    <button onClick={this.ItemAdd8}>
                                        + <BsCartFill />
                                    </button>
                                    <button onClick={this.ItemRemove8}>
                                        -
                                    </button>
                                </h2>

                                <hr />
                                <span className="RatingsTabStyle">
                                    Average rating:
                                    <AiFillStar /> <AiFillStar />{' '}
                                    <AiOutlineStar /> <AiOutlineStar />{' '}
                                    <AiOutlineStar />{' '}
                                </span>

                                <hr />
                            </Col>
                        </Row>

                        <br />
                    </Container>
                </div>
            </div>
        )
    }
}
