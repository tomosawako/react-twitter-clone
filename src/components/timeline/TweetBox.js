import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import "./TweetBox.css"
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import db from '../../firebase';

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    // firebaseのデータベースにデータを追加する
    e.preventDefault();

    addDoc(collection(db, "posts"), {
      displayName: "プログラミングチュートリアル",
      userName: "Shin_Engineer",
      verified: true,
      text: tweetMessage,
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage,
      timestamp: serverTimestamp()
    });

    setTweetImage("");
    setTweetMessage("");
  }

  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox--input'>
                <Avatar />
                <input placeholder='いまどうしてる？' type='text'
                  onChange={(e) => setTweetMessage(e.target.value)}
                  value={tweetMessage}
                />
            </div>
            
            <input 
              className='tweetBox--imageInput'
              placeholder='画像のURLを入力してください。'
              type='text'
              onChange={(e) => setTweetImage(e.target.value)}
              value={tweetImage}
            />
            <Button className='tweetBox--tweetButton' type="submit" onClick={sendTweet}>ツイートする</Button>
        </form>
    </div>
  )
}

export default TweetBox
