import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Componenets/HomePage'
import TagNewsview from '../Componenets/TagNewsview'
import BreakingNews from '../Componenets/BreakingNews'
import VideoNewsview from '../Componenets/VideoNewsview'
import BookmarkSection from '../Componenets/BookmarkSection'
import NewsView from '../Componenets/NewsView'
import Categories from '../Componenets/Categories'
import LiveNews from '../Componenets/LiveNews'
import Notification from '../Componenets/Notification'
import NewsNotification from '../Componenets/NewsNotification'
import ViewAll from "../Componenets/ViewAll"
import CategoryNews from '../Componenets/CategoryNews'
import BreakingNewsView from '../Componenets/BreakingNewsView'
import UserBasedCategories from '../Componenets/UserBasedCategories'
import MorePages from '../Componenets/MorePages'

const Router = () => {
  return (
    <Routes>
      <Route exact="true" path="/" element={<HomePage />}></Route>
        <Route exact="true" path="/categories-view" element={<CategoryNews/>}></Route>
        <Route exact="true" path="/tag-news-view" element={<TagNewsview />}></Route>
        <Route exact="true" path="/breaking-news" element={<BreakingNews />}></Route>
        <Route exact="true" path="/breaking-news-view" element={<BreakingNewsView />}></Route>
        <Route exact="true" path="/video-news-view" element={<VideoNewsview />}></Route>
        <Route exact="true" path="/bookmark" element={<BookmarkSection />}></Route>
        <Route exact="true" path="/news-view" element={<NewsView />}></Route>
        <Route exact="true" path="/view-all" element={<ViewAll />}></Route>
        <Route exact="true" path="/categories" element={<Categories />}></Route>
        <Route exact="true" path="/live-news" element={<LiveNews />}></Route>
        <Route exact="true" path="/notification" element={<Notification />}></Route>
        <Route exact="true" path="/news-notification" element={<NewsNotification />}></Route>
        <Route exact="true" path="/persnol-notification" element={<Notification />}></Route>
        <Route exact="true" path="/user-based-categories" element={<UserBasedCategories />}></Route>
        <Route exact="true" path="/more-pages" element={<MorePages />}></Route>
    </Routes>

  )
}

export default Router