import React, { Component } from 'react';
import './MainContent.css';

class MainContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchCriteria: '',
            loading: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.iflHandler = this.iflHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    handleChange = (event)=>{
        this.setState({searchCriteria:event.target.value});
    }

    searchHandler = () => {
        this.setState({loading: true});
        let combined = `https://www.google.com/search?q=${this.state.searchCriteria}`;
        window.location.href = combined;
        this.setState({loading: false});
    }

    iflHandler = () => {
        if (this.state.searchCriteria === '') return;
        let combined = `https://www.${this.state.searchCriteria}.com`;
        window.location.href = combined;
    }
    
    handleEnter = (event) => {
        console.log(this.state.searchCriteria);
        if (event.keyCode === 13) {
            event.preventDefault();
            document.getElementById('google-search').click();
        }
    }


    render() {
        if(this.state.loading === true) {
            return (
                <div>Loading...</div>
            )
        } else {
            return (
                <div className="main-content-wrapper">
                    <img 
                        className="google-logo" 
                        alt="Google Logo" 
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    />
                    <div className="search-area">
                        
                        <input 
                            className="input-search" 
                            type="text" 
                            placeholder = "Search Google or type URL"
                            onChange={this.handleChange}
                            onKeyUp={this.handleEnter}
        
                            />
                        <img 
                            src="http://i.imgur.com/l5S4LZ2.png" 
                            alt="microphone"
                            className="google-mic"
                            />
        
                    </div>
                    <div className ="button-container">
                        <div 
                            id="google-search"
                            className="search-btn"
                            onClick={this.searchHandler}>
                            Google Search
                        </div>
                        <div 
                            className="search-btn"
                            onClick={this.iflHandler}>
                            I'm Feeling Lucky</div>
                        </div>
                </div>
            );
        }
        
    }
}

export default MainContent;