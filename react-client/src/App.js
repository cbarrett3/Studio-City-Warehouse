import React, { useState, useEffect } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import './App.css';

function App() {
  //   const [featuredCityInfo, updateFeaturedCityInfo] = useState([]);
  //   async function fetchFeaturedCityInfo() {
  //     const data = await API.get('studiocityapi', '/featuredcity/info');
  //     updateFeaturedCityInfo(data.info);
  //   }
  //   useEffect(() => {
  //     fetchFeaturedCityInfo();
  //   }, []);

  const [input, updateInput] = useState({ limit: 5, start: 0 });
  const [coins, updateCoins] = useState([]);
  function updateInputValues(type, value) {
    updateInput({ ...input, [type]: value });
  }
  async function fetchCoins() {
    const { limit, start } = input;
    const data = await API.get(
      'studiocityapi',
      `/featuredcity/info?limit=${limit}&start=${start}`
    );
    updateCoins(data.coins);
  }

  return (
    <Authenticator
      initialState="signUp"
      loginMechanisms={['username', 'email']}
    >
      {({ signOut, user }) => (
        <div>
          <h1>Hello from AWS Amplify {user.username}</h1>
          <input
            onChange={(e) => updateInputValues('limit', e.target.value)}
          ></input>
          <input
            placeholder="start"
            onChange={(e) => updateInputValues('start', e.target.value)}
          ></input>
          <button onClick={fetchCoins}>Fetch Coins</button>
          {coins.map((coin, index) => (
            <div key={index}>
              <h2>{coin.name}</h2>
              <h5>${coin.price_use}</h5>
            </div>
          ))}
          {console.log(coins)}
          {/* {featuredCityInfo.map((city, index) => (
            <div key={index}>
              <h2>
                {city.name} - {city.symbol}
              </h2>
            </div>
          ))} */}
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
