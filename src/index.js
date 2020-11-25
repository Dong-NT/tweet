import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import PropTypes from 'prop-types';
import './index.css';

const Time = ({time}) => {
  const timeString = moment(time).fromNow();
  return (
    <span className="time">{timeString}</span>
  );
};

const ReplyButton = () => (
  <i className="fa fa-reply reply-button"/>
);
const RetweetButton = ({count}) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet"/>
      {getRetweetCount(count)}
    </span>
  )
}

function getRetweetCount(count) {
  if(count > 0) {
    return (
      <span className="retweet-count">
        {count}
      </span>
    );
  } else {
    return null;
  }
}

const LikeButton = ({count}) => (
  <span className="like-button">
    <i className="fa fa-heart"/>
    {count > 0 && (
      <span className="like-count">
        {count}
      </span>
    )}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button"/>
);

const tweet = {
  message: "Something about cats.",
  gravatar: "xyz",
  author: {
    handle: "catperson",
    name: "IAMA Cat Person"
  },
  likes: 20,
  retweets: 2,
  timestamp: "2020-07-30 21:24:37"
};

function Tweet() {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar}/>
      <div className="content">
        <Author author={tweet.author}/>
        <Time time={tweet.timestamp}/>
        <Message text={tweet.message}/>
        <div className="buttons">
          <ReplyButton/>
          <RetweetButton count={tweet.retweets}/>
          <LikeButton count={tweet.likes}/>
          <MoreOptionsButton/>
        </div>
      </div>
    </div>
  )
}

function Avatar({hash}) {
  const url = `https://www.gravatar.com/avatar/${hash}`;
  return (
    <img
      src={url}
      className="avatar"
      alt="avatar" />
  );
}

function Message({text}) {
  return (
    <div className="message">
      {text}
    </div>
  );
}

function Author({author}) {
  const {name, handle} = author;
  return (
    <span className="author">
      <span className="name">{name}</span>
      <span className="handle">@{handle}</span>
    </span>
  );
}

LikeButton.propTypes = {
  count: PropTypes.number
};

Author.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired
  }).isRequired
};

ReactDOM.render(<Tweet/>,
  document.querySelector('#root'));
