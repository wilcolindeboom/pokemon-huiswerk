import React from 'react';
import '../App.css';

function Button({children,onClick, disabled}) {
    return (
        <button type="button" className="button" onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

export default Button;
