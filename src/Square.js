import React from 'react';
/**
 * Controlled components
 * It receives its value from its parent Board 
 * and informs its parent when it’s clicked.
 */
class Square extends React.Component {
    render() {
      return (
        <button className="square" 
            onClick={() => {
                this.props.onClick();
            }}>
          {this.props.value}
        </button>
      );
    }
}

export default Square;
