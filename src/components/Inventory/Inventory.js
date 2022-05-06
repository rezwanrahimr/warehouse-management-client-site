import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h2>This is inventory page</h2>
            <button onClick={() => navigate("/manageInventori")}>Manage Inventori</button>
        </div>
    );
};

export default Inventory;