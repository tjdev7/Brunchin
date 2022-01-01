import { BsCartFill, BsFillPlusSquareFill } from 'react-icons/bs'

import { IoFastFoodSharp } from 'react-icons/io5'

import React from 'react'

import { Container, Row, Col } from 'react-grid-system'

// import Item1_SPS from '../assets/Item1_SPS'

export default class MenuItems extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <br />
                    <Row>
                        <Col md={4}>
                            <span className="ImgStyle">
                                <IoFastFoodSharp />
                            </span>
                            <h1>Sweet Potato Salad</h1>
                            <h2>Price: $11.11</h2>
                            <button>
                                + <BsCartFill /> Add to cart
                            </button>
                            <hr />
                        </Col>
                        <Col md={4}>
                            <span className="ImgStyle">
                                <IoFastFoodSharp />
                            </span>
                            <h1>Brown Crust Pizza</h1>
                            <h2>Price: $11.11</h2>
                            <button>
                                + <BsCartFill /> Add to cart
                            </button>
                            <hr />
                        </Col>
                        <Col md={4}>
                            <span className="ImgStyle">
                                <IoFastFoodSharp />
                            </span>
                            <h1>Mega Burger with Fries</h1>
                            <h2>Price: $17.11</h2>
                            <button>
                                + <BsCartFill /> Add to cart
                            </button>
                            <hr />
                        </Col>
                    </Row>
                    <br />
                    <br />

                    <Row>
                        <Col md={4}>
                            <span className="ImgStyle">
                                <IoFastFoodSharp />
                            </span>
                            <h1>Chips with Salsa</h1>
                            <h2>Price: $9.64</h2>
                            <button>
                                + <BsCartFill /> Add to cart
                            </button>
                            <hr />
                        </Col>
                        <Col md={4}>
                            <span className="ImgStyle">
                                <IoFastFoodSharp />
                            </span>
                            <h1>Noodles with eggs</h1>
                            <h2>Price: $15.24</h2>
                            <button>
                                + <BsCartFill /> Add to cart
                            </button>
                            <hr />
                        </Col>
                        <Col md={4}>
                            <span className="ImgStyle">
                                <IoFastFoodSharp />
                            </span>
                            <h1>Cappuccino with foam</h1>
                            <h2>Price: $7.84</h2>
                            <button>
                                + <BsCartFill /> Add to cart
                            </button>
                            <hr />
                        </Col>
                    </Row>

                    <br />
                    <br />

                    <Row>
                        <Col md={4}>
                            <span className="ImgStyle">
                                <IoFastFoodSharp />
                            </span>
                            <h1>Pasta with Broccoli</h1>
                            <h2>Price: $18.77</h2>
                            <button>
                                + <BsCartFill /> Add to cart
                            </button>
                            <hr />
                        </Col>
                        <Col md={4}>
                            <span className="ImgStyle">
                                <IoFastFoodSharp />
                            </span>
                            <h1>Toast with fried eggs</h1>
                            <h2>Price: $12.48</h2>
                            <button>
                                + <BsCartFill /> Add to cart
                            </button>
                            <hr />
                        </Col>
                    </Row>

                    <br />
                </Container>
            </div>
        )
    }
}
