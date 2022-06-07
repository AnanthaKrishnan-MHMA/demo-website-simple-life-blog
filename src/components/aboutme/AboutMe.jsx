import React from 'react';
import './AboutMe.css'
import PersonalInfo from '../post/personal-info/PersonalInfo';
import WidgetMultiple from '../widget/multiple/WidgetMultiple';
function AboutMe(props) {
    const siteArticleData = [
        {
            url: 'https://github.com/kevin-powell/reponsive-web-design-bootcamp/blob/master/Module%205%20-%20Social%20life%20with%20grid/img/food.jpg?raw=true',
            title: "Keeping cooking simple",
            content: " Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple. continue reading"
        },
        {
            url: 'https://github.com/kevin-powell/reponsive-web-design-bootcamp/blob/master/Module%205%20-%20Social%20life%20with%20grid/img/work.jpg?raw=true',
            title: "Simplicity and work ",
            content: "Work is often a major source of stress. People get frustrated, it ruins their relationship with others and it leads to burnout. By keeping your work life as simple as possible, it will help balance everything out. continue reading"
        },
        {
            url: 'https://github.com/kevin-powell/reponsive-web-design-bootcamp/blob/master/Module%205%20-%20Social%20life%20with%20grid/img/deco.jpg?raw=true',
            title: "Simple decorations ",
            content: "A home isn't a home until you've decorated a little. People either don't decorate, or they go overboard and it doesn't have the impact they were hoping for. Staying simple will help draw the eye where you want it to and make things pop like never before. continue reading"
        }
    ]
    return (
        <div>
            <div className='aboutMe'>
            <div className='aboutMe-main'>
                <PersonalInfo imgUrl='https://github.com/kevin-powell/reponsive-web-design-bootcamp/blob/master/Module%205%20-%20Social%20life%20with%20grid/img/about-me.jpg?raw=true'/>
            </div>
            <div className='aboutMe-right'>
                <WidgetMultiple siteArticleData={siteArticleData}/>
            </div>
            
        </div>
        </div>
    );
}

export default AboutMe;