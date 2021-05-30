import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './Joke';
import { jokes } from './jokes';

const App = () => {
  const [jokesList, setJokesList] = useState(jokes);
  return (
    <>
      <div className="container">
        {jokesList.map((joke) => (
          <Joke
            key={joke.id}
            userAvatar={joke.avatar}
            userName={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))}
      </div>
    </>
  );
};

render(<App />, document.querySelector('#app'));
