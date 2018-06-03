import React, { Component } from 'react';
import './MainContent.css';


class MainContent extends Component {

        state ={
            searchCriteria:'',
        }

        handleChange = (event)=>{
            this.setState({searchCriteria:event.target.value});
        }

        searchHandler = () => {
            let combined = `https://www.google.com/search?q=${this.state.searchCriteria}`;
            window.location.href = combined;
        }
    
        iflHandler = () => {
            if (this.state.searchCriteria === '') return;
            let combined = `https://www.${this.state.searchCriteria}.com`;
            window.location.href = combined;
        }
    

    
    render() {
        return (
            <div className="main-content-wrapper">
                <div className="search-area">
                    <img 
                        className="google-logo" 
                        alt="Google Logo" 
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        />
                    <div>
                    <input 
                        className="input-search" 
                        type="text" 
                        placeholder = "Search Google or type URL"
                        onChange={this.handleChange}
                        />
                        <img 
                            src="http://i.imgur.com/l5S4LZ2.png" 
                            alt="microphone"
                            className="google-mic"
                            />

                    </div>

                </div>
                <div 
                    className ="button-container">
                    <div 
                        className="search-btn"
                        onClick={this.searchHandler}>
                        Google Search</div>
                    <div 
                        className="search-btn"
                        onClick={this.iflHandler}>
                        I'm Feeling Lucky</div>
                </div>
            </div>
        );
    }
}

export default MainContent;