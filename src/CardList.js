import React, { Fragment } from 'react';
import Card from './Card'

const CardList = ({ robots }) => {
    const cardArray = robots.map((user, i) => {
        return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email} />
    })
    return (
        <Fragment>
            <div>
                {cardArray}
            </div>
        </Fragment>
    );
}

export default CardList;