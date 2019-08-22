import React from 'react';

const Settings = props => {
    return (
        <aside className="settings">
            <h1>Настройки:</h1>
            <ul className="settings__list">
                <li className="settings__item control">
                    <div className="control__title">Очистить поле:</div>
                    <button type="button" className="settings__option settings__btn" onClick={props.clearField}>Очистить</button>
                </li>
                <li className="settings__item control">
                    <div className="control__title">Изменить шрифт:</div>
                    <ul className="settings__options settings__font">
                        <li className="settings__option settings__option--active" onClick={props.changeFont}>{props.settings.fontName[0]}</li>
                        <li className="settings__option" onClick={props.changeFont}>{props.settings.fontName[1]}</li>
                        <li className="settings__option" onClick={props.changeFont}>{props.settings.fontName[2]}</li>
                    </ul>
                </li>
                <li className="settings__item control">
                    <div className="control__title">Изменить размер шрифта:</div>
                    <ul className="settings__options settings__font-size">
                        <li className="settings__option settings__option--active" onClick={props.changeFontSize}>{props.settings.fontSize[0]}</li>
                        <li className="settings__option" onClick={props.changeFontSize}>{props.settings.fontSize[1]}</li>
                        <li className="settings__option" onClick={props.changeFontSize}>{props.settings.fontSize[2]}</li>
                    </ul>
                </li>
            </ul>
        </aside>
    )
};

export default Settings;