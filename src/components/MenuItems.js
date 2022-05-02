import React from 'react'

import { FaShoppingCart } from 'react-icons/fa'

import item1_SPS from '../assets/item1_SPS.png'
import item2_BCP from '../assets/item2_BCP.png'
import item3_BF from '../assets/item3_BF.png'
import item4_CS from '../assets/item4_CS.png'
import item5_BN from '../assets/item5_BN.png'
import item6_CAP from '../assets/item6_CAP.png'
import item7_ENS from '../assets/item7_ENS.png'
import item8_TE from '../assets/item8_TE.png'
import item9_Sm from '../assets/item9_Sm.png'

export default class MenuItems extends React.Component {
    render() {
        return (
            <div className="App">
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
                            <h1 className="ItemTitle">Toast with fried eggs</h1>

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
                                    ariaLabel={
                                        'Add Toast with fried eggs to your cart'
                                    }
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
