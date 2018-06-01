import React, { Component } from 'react';
import './MainContent.css';

class MainContent extends Component {
    render() {
        return (
            <div className="main-content-wrapper">
                <div className="search-area">
                    <img className="google-logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
                    <input type="text"/>
                </div>
            </div>
        );
    }
}

export default MainContent;