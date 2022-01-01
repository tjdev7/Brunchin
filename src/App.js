import './App.css'

import { BsCartFill } from 'react-icons/bs'

import MenuItems from './components/MenuItems'

function App() {
    return (
        <div className="App">
            <header>
                <ul>
                    <li>
                        Cart
                        <BsCartFill />
                    </li>
                </ul>
            </header>

            <MenuItems />
        </div>
    )
}

export default App
