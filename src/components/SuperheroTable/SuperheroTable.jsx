import React from "react";

const SuperheroTable = (props) => {
    return (
        <table>
            <th>Name Primary Ability Secondary Ability</th>
            {props.superhero.map((item =>
                <tr><td key={item.superheroId}>{item.name} {item.primaryAbility} {item.secondaryAbility}</td></tr>
                ))}
        </table>
    );
}

export default SuperheroTable