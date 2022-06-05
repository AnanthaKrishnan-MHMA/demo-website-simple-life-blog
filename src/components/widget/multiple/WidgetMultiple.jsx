import React from 'react';
import './WidgetMultiple.css'
function WidgetMultiple(props) {
    const { siteArticleData } = props;
    return (
        <div className='widgetmultiple-main'>
            <div className='widgetmultiple-sub'>
                <div className="widgetmultiple-title">recent posts</div>
                {siteArticleData.map((data, k) =>
                    <div key={k} className='widgetmultiple-sub-box'>
                        <img className="widgetmultiple-img" src={data.url} alt="" />
                        <p className="widgetmultiple-subtitle">{data.title}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default WidgetMultiple;