import React from 'react';

const Header = ({title, desc}) => {
  return (
    <div className="header">
      <h2>{title}</h2>
      <p>{ desc}</p>
    </div>
  );
};

export default Header;