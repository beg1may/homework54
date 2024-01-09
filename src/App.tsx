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
        const newItems = [...items];
        newItems[index].clicked = true;
        setItems(newItems);
    };

    const handleReset = () => {
        setItems(createItems());
        setAttempts(0);
    };

    return (
        <div>
            <AttemptsCounter attempts={attempts} />
            <ResetButton onReset={handleReset} />
            <GameBoard items={items} onCellClick={handleCellClick} />
        </div>
    );
};

export default App;
