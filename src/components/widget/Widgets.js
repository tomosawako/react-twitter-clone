import { TwitterTimelineEmbed, TwitterShareButton,  TwitterTweetEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Search } from '@mui/icons-material'
import React from 'react'
import "./Widgets.css"

const Widgets = () => {
  return (
    <div className='widgets'>
        <div className='widgets--input'>
            <Search className='widgets--searchIcon'/>
            <input placeholder='キーワード検索' type='text'/>
        </div>

        <div className='widgets--widgetContainer'>
            <h2>いまどうしてる？</h2>
            {/* ライブラリを追加 */}
            <TwitterTweetEmbed tweetId={"1475764828208009220"}/>
            <TwitterTimelineEmbed
            sourceType="profile"
            screenName="Shin_Engineer"
            options={{height: 400}}
            />
              <TwitterShareButton
                    url={'https://twitter.com/Shin_Engineer'}
                    options={{ text: '#reactjs is awesome', via: 'Shin_Engineer' }}
                />
        </div>
      
    </div>
  )
}

export default Widgets
