import React from 'react';
import logo from '../../assests/logo.svg';

import './Notifications.css';

const Notification = () => {
  const handleClick = () => {
    console.log('true to redirect')
  };
  const handledoLater = () => {
    console.log("handledoLater")
  };
  return (
    <div className="Notification">
      <div className="Notification-header">
        <img src={logo} className="Notification-logo" alt="logo" />
        <p>
         Notification
        </p>
      </div>
      <div className="Notification-body">
        <p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        <a
          className="Notification-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          What updates will I receive
        </a>
      </div>
      <div className="Notification-footer">
        <button onClick={handleClick}>Turn it on</button>
        <button onClick={handledoLater}>I'll do it later</button>
      </div>
    </div>
  );
}

export default Notification;
