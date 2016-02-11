import React from 'react';

const headerNavStyle = {
  zIndex: 100,
  height: '50px',
  width: '100%',
  position: 'fixed',
  lineHeight: '50px',
  fontSize: '0.9em',
  backgroundColor: 'rgba(253, 253, 253, 0.95)',
  boxShadow: '0 1px 0 rgba(0, 0, 0, 0.17)',
};

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header" style={headerNavStyle}>
      </div>
    );
  }
}

export default Header;
