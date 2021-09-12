import React from "react";
import './SuperHeroTable.css'

const SuperheroTable = (props) => {
    return (
        <table>
            <thread>
                <tr>
                    <th>Name</th>
                    <th>Primary Ability</th>
                    <th>Secondary Ability</th>
                </tr>
            </thread>
            <thread>
                    {props.superhero.map((item =>
                        <tr>
                            <td key={item.superheroId}>{item.name}</td>
                            <td>{item.primaryAbility}</td>
                            <td>{item.secondaryAbility}</td>
                        </tr>
                        ))}
            </thread>
        </table>
    );
}

export default SuperheroTable