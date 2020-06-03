import React, {useEffect,useState} from 'react' 
import {Link} from 'react-router-dom'
import axios from 'axios'

const NewPage = () => {
    const [coinData, setCoinData] = useState([]);

    useEffect(() => {
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        )
        .then(res => {
            console.log(res.data)
            setCoinData(res.data)
        })
     
        .catch(err => console.log(err));
    }, []);

    return (
        <div >
            <Link to='/'> HomePage </Link>

            {coinData.map(coin=> {
                return (
                   <div key={coin.id}> 
                      <p>Name: {coin.name}</p> 
                       <p>symbol:{coin.symbol} </p> 
                       <img src={coin.image} alt={coin.name} />
                       {coin.sparkline_in_7d.price}
                    </div>
                   
                    )
            })}
        </div>
    )
}



export default NewPage;