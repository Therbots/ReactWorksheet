import React from 'react';

const NamesList = (props) => {
    return (
        <React.Fragment>
            <div>
                <ul>
                    {props.listName.map((name) => {
                        return <li>{name}</li>
                        })}
                </ul>
            </div>
        </React.Fragment>
    );
}

export default NamesList;