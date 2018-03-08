import React from "react";
import { DarkBackgroundCard } from "./dark-background-card.js";
import { StoryList } from "../basic/story-list.js"
import { Link, ResponsiveImage } from "@quintype/components";

function TwoColDarkBackgroundCard({stories}) {

  if(stories.length < 1) {
    return <div></div>
  }
  const columnOneStories = _.take(stories,1).map(story => <DarkBackgroundCard isHorizontal={true} aspectRatio={[16, 9]} key={story.id} story={story} showSectionName={false} showImage= {true}/>);
  const columnTwoStories = _.take(_.drop(stories,1),1).map(story => <DarkBackgroundCard key={story.id} story={story} showSectionName={false} showImage= {true}/>);
const columnThreeStories = _.take(_.drop(stories,2),1).map(story => <DarkBackgroundCard key={story.id} story={story} showSectionName={false} showImage= {true}/>);

    

  

  return(
       <div className='two-col-one-featured-dark container'>
       <div className='section-title'>Video</div>
        <div className='two-col-one-featured-dark__item two-col-one-featured-dark__item--first'>
          { columnOneStories }
        </div>
       <div className='two-col-one-featured-dark__item'> 
          { columnTwoStories }
       </div>
       <div className='two-col-one-featured-dark__item'>
          { columnThreeStories }
       </div>
    </div>
  ); 
}

export { TwoColDarkBackgroundCard };