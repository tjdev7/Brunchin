import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Container } from 'react-grid-system'

import { IoFastFoodSharp } from 'react-icons/io5'

// import Item1_SPS from '../assets/Item1_SPS'

// const addToCar = handleClick
// add to state.cart array
// item+
// price+

const items = [
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
        price: '15.24',
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

export default class MenuItems extends React.Component {
    state = {
        Itemcount: 0,
        CartSum: 5,
    }
    ItemAdd1 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 1,
        })
    }

    ItemRemove1 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd2 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 1,
        })
    }

    ItemRemove2 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd3 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 1,
        })
    }

    ItemRemove3 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd4 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 1,
        })
    }

    ItemRemove4 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd5 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 1,
        })
    }

    ItemRemove5 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd6 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 1,
        })
    }

    ItemRemove6 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd7 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 1,
        })
    }

    ItemRemove7 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
        })
    }

    ItemAdd8 = () => {
        this.setState({
            Itemcount: this.state.Itemcount + 1,
            CartSum: this.state.CartSum + 1,
        })
    }

    ItemRemove8 = () => {
        this.setState({
            Itemcount: this.state.Itemcount - 1,
        })
    }
    render() {
        return (
            <div>
                <span>
                    {this.state.Itemcount} | {this.state.CartSum}
                </span>
                {items.map((item) => (
                    <Container>
                        <br />

                        <li className="col">
                            <span className="ImgStyle">
                                {item.pic}
                                <br />
                            </span>
                            {item.name}
                            <br />
                            {item.price}
                            <br />

                            <button onClick={this.ItemAdd1}>+</button>

                            <span className="currentcounts">Add to cart</span>

                            <button onClick={this.ItemRemove1}>-</button>
                            <hr />
                        </li>
                    </Container>
                ))}
            </div>
        )
    }
}
