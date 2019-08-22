import React from 'react';
import Settings from '../../Settings';
import Main from '../../Main';
import Result from '../../Result';

import './Container.css';

const Container = props => {
    return (
        <div className="container">
            <Settings
                clearField={props.clearField}
                changeFont={props.changeFont}
                changeFontSize={props.changeFontSize}
                settings={props.settings}
            />
            <Main
                handleChange={props.handleChange}
                textareaValue={props.textareaValue}
                currentSettings={props.currentSettings}
            />
            <Result
                charsIncludingSpaces={props.charsIncludingSpaces}
                charsWithoutSpaces={props.charsWithoutSpaces}
                wordCount={props.wordCount}
                sentenceCount={props.sentenceCount}
            />
        </div>
    )
};

export default Container;