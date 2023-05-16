import React from 'react';

export class SimonColor extends React.Component {
    // Constructors & Initial states

    // Note that with ES6 constructors are obsolete

    // Lifecycle Methods
    render() {
        console.log(this);
        console.log(this.props);
        const style = { backgroundColor: 'white', border: 'solid 1px black' };

        return <div style={style}>The color is </div>;
    }
}
