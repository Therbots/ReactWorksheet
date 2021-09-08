import React from 'react';

const DisplayName = (props) => {
    return (
        <div className="row">
            <h1 className='firstName'>First Name: {props.name.firstName}</h1>
            <h1 className='lastName'>Last Name: {props.name.lastName}</h1>
        </div>
    );
}

export default DisplayName;