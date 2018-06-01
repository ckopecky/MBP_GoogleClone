import React, { Component } from 'react';
import './MainContent.css';

class MainContent extends Component {
    render() {
        return (
            <div className="main-content-wrapper">
                <div className="search-area">
                    <img className="google-logo" alt="Google Logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"/>
                    <input className="input-search" type="text"/>
                </div>
                <div className ="button-container">
                    <div className="search-btn">Google Search</div>
                    <div className="search-btn">I'm Feeling Lucky</div>
                </div>
            </div>
        );
    }
}

export default MainContent;