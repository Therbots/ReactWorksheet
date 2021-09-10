import React from 'react';

const NamesList = (props) => {
    return (
        <div>
            <ul>
                {props.listName.map((name) => {
                    return <li>{name}</li>
                })}
            </ul>
        </div>
    );
}

export default NamesList;