import React from 'react';
import './FeaturedPost.css'
function FeaturedPost(props) {
    const {imgUrl} = props;
    return (
        <article className='featPost'>
            <img className='featPost__img' src={imgUrl} alt="" />
            {/* dynamic>> */}
            <p className='date-and-time'>jul 23, 2019 | 3 comments</p>
            <h2 className='featPost__title'>Finding simplicity in life</h2>
            <p className="featPost__content">
                <span>Life can get complicated really quickly</span>, but it doesn't have to be! 
                There are many ways to simplify your life,<a href="#link">a few of which we've explored in the past</a>. This week we're 
                taking a bit of a approach though, in how you can find simplicity in the life you already living. continue reading
            </p>
            <a className='featPost__readmore' href="#constinueReading">CONTINUE READING</a>
        </article>
    );
}

export default FeaturedPost;