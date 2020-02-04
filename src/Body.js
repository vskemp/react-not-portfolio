import React from 'react';

function Body(props) {
    return (
        <div>
            <p>
                {props.content}
            </p>
        </div>
    );
}

export default Body;