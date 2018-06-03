import React, { Component } from 'react';
import './TopNav.css';
import grid from './grid.png';
import notification from './notification.png';
import circular from './circular-shape-silhouette.png';

class TopNav extends Component {
    render() {
        return (
            <div className="top-nav-wrapper">
               <div className ="about-store">
                <div><a href="https://www.google.com/intl/en/about/">About</a></div>
                <div><a href="https://store.google.com/">Store</a></div>
               </div>
               <div className = "gmail-images">
                <div><a href="http://www.gmail.com">Gmail</a></div>
                <div><a href="https://images.google.com/?gws_rd=ssl">Images</a></div>
                <img src={`${grid}`} alt="grid"/>
                <img src={`${notification}`} alt="notification"/>
                <img src={`${circular}`} alt="circle"/>

               </div>

            </div>
        );
    }
}

export default TopNav;