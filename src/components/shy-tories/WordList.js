import React, {useState} from 'react';

const topWords = {
    mp: 611,
    parliament: 481,
    uk: 327,
    member: 226,
    email: 207,
    please: 192,
    labour: 146,
    casework: 119,
    minister: 110,
    conservative: 107
}

const topBigrams = {
    'mp for': 324,
    'member of': 209,
    'of parliament': 201,
    'parliament for': 193,
    'please email': 131,
    'labour mp': 102,
    'conservative mp': 60,
    'minister for': 57,
    'uk labour': 42,
    'if you': 42
}

const topTrigrams = {
    'member of parliament': 201,
    'of parliament for': 190,
    'labour mp for': 95,
    'conservative mp for': 57,
    'uk member of': 35,
    'uk labour mp': 33,
    'conservative member of': 32,
    'shadow minister for': 27,
    'uk mp for': 24,
    'secretary of state': 23,
}

const lists = {
    word: topWords,
    bigrams: topBigrams,
    trigrams: topTrigrams
}

function WordList() {
    const [listType, setListType] = useState('word');

    const optionSelector = (
        <div className="flex-center radio-button-container">
            <label className="word-type-selector">
                <input
                    type="radio"
                    checked={listType === 'word'}
                    value="word"
                    onChange={() => setListType('word')}
                /> Top words
            </label>

            <label className="word-type-selector">
                <input
                    type="radio"
                    checked={listType === 'bigrams'}
                    value="bigrams"
                    onChange={() => setListType('bigrams')}
                /> Top bigrams
            </label>

            <label className="word-type-selector">
                <input
                    type="radio"
                    checked={listType === 'trigrams'}
                    value="trigrams"
                    onChange={() => setListType('trigrams')}
                /> Top trigrams
            </label>
        </div>
    )

    return (
        <div>
            <p className="mb-0 recurring-words-title">
                Recurring words:
            </p>
            {optionSelector}

            <div className="grid word-list">
                <h4 className="mb-0">Word</h4>
                <h4 className="mb-0">Frequency</h4>
            </div>
            {Object.keys(lists[listType]).map((row, index) => (
                <div className="grid word-list" key={index}>
                    <p className="mb-0">{row}</p>
                    <p className="mb-0">{lists[listType][row]}</p>
                </div>
            ))}
        </div>
    )
}

export default WordList;