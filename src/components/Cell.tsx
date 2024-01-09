import React from 'react';

const Cell = ({ item, onClick }) => {
    const handleClick = () => {
        if (!item.clicked) {
            onClick();
        }
    };

    return (
        <div className={`cell ${item.clicked ? 'clicked' : ''}`} onClick={handleClick}>
            {item.clicked && item.hasItem && 'O'}
        </div>
    );
};

export default Cell;
