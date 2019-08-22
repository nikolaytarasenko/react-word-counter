import React from 'react';

const Result = props => {
    return (
        <aside className="result">
            <h1>Результат:</h1>
            <ul className="result__list">
                <li className="result__item">
                    <div className="result__title">Количество символов (с пробелами):</div>
                    <div className="result__value">{props.charsIncludingSpaces}</div>
                </li>
                <li className="result__item">
                    <div className="result__title">Количество символов (без пробелов):</div>
                    <div className="result__value">{props.charsWithoutSpaces}</div>
                </li>
                <li className="result__item">
                    <div className="result__title">Количество слов:</div>
                    <div className="result__value">{props.wordCount}</div>
                </li>
                <li className="result__item">
                    <div className="result__title">Количество предложений:</div>
                    <div className="result__value">{props.sentenceCount}</div>
                </li>
            </ul>
        </aside>
    )
};

export default Result;