import React from 'react';
import './RecentPost.css'
function RecentPost(props) {
    const { imgUrl, title, content } = props;
    return (
        <div>
            <article className='recPost'>
                <div className="recPost__left">
                    <img className='recPost__img' src={imgUrl} alt="" />
                    <p className='date-and-time'>jul 23, 2019 | 3 comments</p>
                </div>
                <div className="recPost__right">
                    <h2 className='recPost__title'>{title}</h2>
                    <p className="recPost__content">{content}</p>
                    <a className='recPost__readmore' href="#constinueReading">CONTINUE READING</a>
                </div>
                {/* <div className="recPost__titlebar">
                </div> */}
            </article>
        </div>
    );
}

export default RecentPost;