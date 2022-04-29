// import { BsCartFill, BsFillPlusSquareFill } from 'react-icons/bs'

import { Container, Row, Col } from 'react-grid-system'

import React from 'react'

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
