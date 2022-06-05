import React from 'react';
import './WidgetSingle.css'
function WidgetSingle(props) {
    return (
        <div className='widgetsingle-main'>
            <div className='widgetsingle-sub'>
                <div className="widgetsingle-title">about me</div>
                <img className="widgetsingle-img" src="https://github.com/kevin-powell/reponsive-web-design-bootcamp/blob/master/Module%205%20-%20Social%20life%20with%20grid/img/about-me.jpg?raw=true" alt="profile pic" />
                <div className="widgetsingle-content">I find life better, and I'm happier, when things are nice and simple.</div>
            </div>
        </div>
    );
}

export default WidgetSingle;