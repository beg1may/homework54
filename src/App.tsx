import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import AttemptsCounter from './components/AttemptsCounter';
import ResetButton from './components/ResetButton';
import './style.css';

const createItems = () => {
    const items = Array(36).fill({ hasItem: false, clicked: false });
    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex].hasItem = true;
    return items;
};

const App = () => {
    const [items, setItems] = useState(createItems());
    const [attempts, setAttempts] = useState(0);

    const handleCellClick = (index) => {
        setAttempts(attempts + 1);
        const newItems = items.map((item, i) => ({
            ...item,
            clicked: item.clicked || i === index,
        }));
        setItems(newItems);
    };

    const handleReset = () => {
        setItems(createItems());
        setAttempts(0);
    };

    return (
        <div>
            <AttemptsCounter attempts={attempts} />
            <GameBoard items={items} onCellClick={handleCellClick} />
            <ResetButton onReset={handleReset} />
        </div>
    );
};

export default App;
