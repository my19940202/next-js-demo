import React from 'react';

export function StickyIcon() {
    const style: React.CSSProperties = {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        borderRadius: 25,
        position: 'fixed',
        bottom: 50,
        right: 50
    }
    return (
        <div style={style}>
            +
        </div>
    );
}
