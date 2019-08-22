import React, { Component } from 'react';
import Header from './layout/Header/Header';
import Container from './layout/Container/Container';

class WordCounter extends Component {
    state = {
        settings: {
            fontName: ['Monospace', 'Tahoma', 'Arial'],
            fontSize: ['14px', '18px', '22px']
        },
        currentFont: 'Monospace',
        currentFontSize: '14px',
        textareaValue: '',
        charsIncludingSpaces: 0,
        charsWithoutSpaces: 0,
        wordCount: 0,
        sentenceCount: 0
    };

    // Clear textarea
    clearField = e => {
        this.setState({
            textareaValue: '',
            charsIncludingSpaces: 0,
            charsWithoutSpaces: 0,
            wordCount: 0,
            sentenceCount: 0
        })
    };

    // Processing changes in textarea
    handleChange = e => {
        const value = e.target.value;
        this.countWord(value);

        this.setState({
            textareaValue: value
        });
    };

    // Calculate results
    countWord = value => {
        const charsIncludingSpaces = value.length;
        const charsWithoutSpaces = value.replace(/\s+/g, '').length;
        const wordCount = value.trim().replace(/\s{2,}/g, ' ').split(' ').length;
        const sentenceCount = value.trim().replace(/\.{2,}/g, '.').split('.').filter(item => item.length !== 0).length;

        this.setState({
            charsIncludingSpaces,
            charsWithoutSpaces,
            wordCount,
            sentenceCount
        })
    };

    // Settings -> Change font
    changeFont = e => {
        let fontItems = document.querySelectorAll('.settings__font .settings__option');

        [...fontItems].forEach(item => {
            if (item.classList.contains('settings__option--active')) {
                item.classList.remove('settings__option--active');
            }
        });

        e.target.classList.add('settings__option--active');

        this.setState({
            currentFont: e.target.textContent
        });
    };

    // Settings -> Change font size
    changeFontSize = e => {
        let fontSizeItems = document.querySelectorAll('.settings__font-size .settings__option');

        [...fontSizeItems].forEach(item => {
            if (item.classList.contains('settings__option--active')) {
                item.classList.remove('settings__option--active');
            }
        });

        e.target.classList.add('settings__option--active');

        this.setState({
            currentFontSize: e.target.textContent
        });
    };

    render() {
        const { isClear, fontName, fontSize } = this.state.settings;

        const settings = {
            isClear,
            fontName,
            fontSize
        };

        const currentSettings = {
            currentFont: this.state.currentFont,
            currentFontSize: this.state.currentFontSize
        };

        return (
            <React.Fragment>
                <Header />
                <Container
                    handleChange={this.handleChange}
                    clearField={this.clearField}
                    changeFont={this.changeFont}
                    changeFontSize={this.changeFontSize}
                    textareaValue={this.state.textareaValue}
                    charsIncludingSpaces={this.state.charsIncludingSpaces}
                    charsWithoutSpaces={this.state.charsWithoutSpaces}
                    wordCount={this.state.wordCount}
                    sentenceCount={this.state.sentenceCount}
                    settings={settings}
                    currentSettings={currentSettings}
                />
            </React.Fragment>
        )
    }
}

export default WordCounter;