import React, { Fragment } from 'react';
import Card from './Card'

const CardList = ({ robots, randomNumber }) => {
    return (
        <Fragment>
            <div>
                {
                    robots.map((user, i) => {
                        return (
                            <Card
                                key={i} //React virtualDOM must know about each items and have unique key value
                                id={robots[i].id}
                                name={robots[i].name}
                                email={robots[i].email}
                                randomAvatar={randomNumber}
                            />
                        );
                    })
                }
            </div>
        </Fragment>

    );
}

export default CardList;