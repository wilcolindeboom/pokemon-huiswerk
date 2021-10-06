import React from 'react';
import '../App.css';

function Button({children}) {
    return (
        <button type="button" className="button">
            {children}
        </button>
    );
}

export default Button;
