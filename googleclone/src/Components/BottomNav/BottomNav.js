import React, { Component } from 'react';
import './BottomNav.css';

class BottomNav extends Component {
    render() {
        return (
            <div className="bottom-nav-wrapper">
                <div className ="about-store">
                <div><a 
                    href="https://www.google.com/intl/en_us/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
                    <p>Advertising</p></a></div>
                <div><a 
                    href="https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1#?modal_active=none">
                    <p>Business</p></a></div>
               </div>
               <div className = "gmail-images">
                <div><a 
                    href="https://policies.google.com/privacy?hl=en&gl=us">
                    <p>Privacy</p></a></div>
                <div><a 
                    href="https://policies.google.com/terms?hl=en&gl=us">
                    <p>Terms</p></a></div>
                <div><a 
                    href="https://www.google.com/preferences?hl=en&fg=1">
                    <p>Settings</p></a></div>

               </div>
            </div>
        );
    }
}

export default BottomNav;