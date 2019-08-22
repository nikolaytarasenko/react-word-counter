import React from 'react';


const Main = props => {
    const styles = {
        fontFamily: props.currentSettings.currentFont,
        fontSize: props.currentSettings.currentFontSize
    };

    return (
        <main className="main">
            <h1 className="main__title">Введите текст в поле:</h1>
            <div className="main__content">
                <textarea style={styles}
                    className="main__textarea"
                    onChange={props.handleChange}
                    value={props.textareaValue}
                ></textarea>
            </div>
        </main>
    )
};

export default Main;