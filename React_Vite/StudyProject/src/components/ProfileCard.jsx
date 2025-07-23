import React from 'react';

export function ProfileCard(props) {
    return (
        <div>
            <h2>안녕하세요, 저는 {props.name}입니다!</h2>
            <p>{props.job}입니다!</p>
        </div>
    )
}