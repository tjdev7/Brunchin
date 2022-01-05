// import { BsCartFill, BsFillPlusSquareFill } from 'react-icons/bs'

import { Container, Row, Col } from 'react-grid-system'

import React from 'react'

// this.state.cart
// items: {0}
// TotalSum:
// sum
//
// if itemcount = 0
// return (Your cart is currently empty)
//
// handlelLick
// return
// Your cart is empty. Try to add some new food items!
// ?
// Your order has been placed. Go to the menu and shop some more!
// RemoveCartItem
// return (Your cart is currently empty.)
export default class CheckoutTab extends React.Component {
    state = {
        Itemcount: 0,
        CartSum: 0,
    }
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <button>Pay total: ${this.state.CartSum}</button>
                        </Col>

                        <br />
                        <br />
                        <br />
                    </Row>
                    <Row>
                        <Col>
                            <div>test</div>
                            <div>test</div>
                            <div>test</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
