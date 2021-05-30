import React, { useState } from 'react';
import './style.css';

const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likesCount, setLikesCount] = useState(likes);
  const [dislikesCount, setDislikesCount] = useState(dislikes);

  const handleLikeClick = () => {
    setLikesCount(likesCount + 1);
  };

  const handleDislikeClick = () => {
    setDislikesCount(dislikesCount + 1);
  };

  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleLikeClick}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likesCount}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleDislikeClick}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislikesCount}
        </span>
      </div>
    </div>
  );
};

export default Joke;
