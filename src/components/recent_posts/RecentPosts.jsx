import React from 'react';
import './RecentPosts.css';
import FeaturedPost from '../post/featuredpost/FeaturedPost';
import RecentPost from '../post/recentpost/RecentPost';
import WidgetSingle from '../widget/single/WidgetSingle';
import WidgetMultiple from '../widget/multiple/WidgetMultiple';
function RecentPosts(props) {
    const siteArticleData = [
        {
            url: 'https://github.com/kevin-powell/reponsive-web-design-bootcamp/blob/master/Module%205%20-%20Social%20life%20with%20grid/img/life.jpg?raw=true',
            title: "Finding simplicity in life",
            content: " Life can get complicated really quickly, but it doesn't have to be!. There are many ways to simplify your life,a few of which we've explored in the past. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living."
        },
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
        <div className='recentPost'>
            <div className='recentPost-main'>
                {siteArticleData.map((data,k) => <RecentPost key={k} imgUrl={data.url} title={data.title} content={data.content} />)}
            </div>
            <div className='recentPost-right'>
                <WidgetSingle />
                <WidgetMultiple siteArticleData={siteArticleData}/>
            </div>
            
        </div>
    );
}

export default RecentPosts;