import React from 'react';

export default function renderPie({ text, address }) {
    return (
        <a href={address} rel="noreferrer" target="_blank">
             {text}
        </a>
    )
}