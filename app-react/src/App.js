import { useState } from 'react';


const assets = {
    img: "https://freepngimg.com/thumb/burger/7-2-burger-png-picture.png",
    img2: "https://th.bing.com/th/id/R.5dd8a143b4e1abd1b23015ba02d164ca?rik=ItCU%2b8UgzNTVfw&pid=ImgRaw&r=0",
}
export default function App() {

    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState(0);
    if (value < 0) {
        return setValue(0);
    }
    else if (value > 10) {
        return setValue(10);
    }

    else if (value2 < 0) {
        return setValue2(0)
    }

    else if (value2 > 10) {
        return setValue2(10)
    }

    return (
        <div className='main'>
            <ul>
                <li><h3>BurguerShop</h3></li>
            </ul>
            <div className='section'>
                <h1>Classic Burguer</h1>
                <br></br>
                <img src={assets.img} alt="" />
                <br></br>
                Quantidades: {value}
                <br></br>
                <button onClick={() => setValue(value + 1)}>Adicionar</button>
                <button onClick={() => setValue(value - 1)}>Remover</button>
                <br></br>
            </div>

            <div className='section'>
                <h1>Classic Fries</h1>
                <br></br>
                <img src={assets.img2} alt="" />
                <br></br>
                Quantidades: {value2}
                <br></br>
                <button onClick={() => setValue2(value2 + 1)}>Adicionar</button>
                <button onClick={() => setValue2(value2 - 1)}>Remover</button>
            </div>
            <div className='result'>
                <p>Quantidades Totais: {value + value2}</p>
                <p>Valor a pagar {value2 * 5 + value * 15}</p>
            </div>
        </div>
    );

}