import React, { Component } from 'react';
//JSX 삼항연산자
class Sample extends Component {
  render() {
    const value = 1;
    return (
      <>
      <div>
        {
          1 + 1 === 2 
            ? (<div>맞아요!</div>)
            : (<div>틀려요!</div>)
        }
      </div>
      <div>
        {
          (function() {
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>

      </>
    );
  }
}

export default Sample;