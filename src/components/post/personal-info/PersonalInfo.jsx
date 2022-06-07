import React from 'react';
import './PersonalInfo.css'
function PersonalInfo(props) {
    const { imgUrl } = props;
    return (
        <article className='personalInfo'>
            <img className='personalInfo__img' src={imgUrl} alt="" />
            {/* dynamic>> */}
            <p className='date-and-time'>jul 23, 2019 | 3 comments</p>
            <h2 className='personalInfo__title'>My name is John and living the simple life saved my life </h2>
            <p className="personalInfo__content">
                I used to be a pack rat.I had so many things that I thought that I loved, but the truth was I couldn't even
                appreciate any of it because there was too much. Things were terrible. I had a job that I hated, a home that
                I didn't want to live in, and I couldn't hold a relationship.
            </p>
            <h2 className='personalInfo__subtitle'> How I turned things around</h2>
            <p className="personalInfo__content">
                I was on the verge of a breakdown when I got rid of everything.I literally put 90 % of my possessions in the garbage,
                sold my place and moved into a smaller apartment, and I quit my job.It wasn't easy at all, but everything around me
                was in such a bad place, I didn't know what else to do.And it worked.
            </p>
            <h2 className='personalInfo__subtitle'>Now I live the simple life</h2>
            <p className="personalInfo__content">
                Now that I'm living a simple life, things are so much better.I'm less stressed, enjoy life and work more, and I have
                more free time to enjoy.With how much it turned my life around, I felt like I had no choice but to start sharing how
                I did it, and how others can benefit from living a simple life as well, which is why I started this site!
            </p>
            <a className='personalInfo__readmore' href="#constinueReading">CONTINUE READING</a>
        </article>
    );
}

export default PersonalInfo;
