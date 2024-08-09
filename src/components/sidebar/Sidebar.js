import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Button } from '@mui/material';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      {/* ツイッターアイコン */}
      <TwitterIcon className='sidebar--twitterIcon'/>
      {/* SidebarOption */}
      <SidebarOption text='ホーム' Icon={HomeIcon} active/>
      <SidebarOption text='話題を検索' Icon={SearchIcon} />
      <SidebarOption text='通知' Icon={NotificationsNoneIcon} />
      <SidebarOption text='メッセージ' Icon={MailOutlineIcon} />
      <SidebarOption text='ブックマーク' Icon={BookmarkIcon} />
      <SidebarOption text='リスト' Icon={HomeIcon} />
      <SidebarOption text='プロフィール' Icon={ListAltIcon} />
      <SidebarOption text='もっと見る' Icon={MoreHorizIcon} />
      {/* ツイッターボタン */}
      <Button variant="outlined" className='sidebar--tweet' fullWidth>ツイートする</Button>
      
    </div>
  )
}

export default Sidebar
