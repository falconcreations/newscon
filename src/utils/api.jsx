import { store } from "../store/store";

const access_key = process.env.REACT_APP_ACCESS_KEY;

const GENERATE_TOKEN = "generate_token_api";
const LANGUAGE_LIST = "get_languages_list";
const GET_CATEGORIES = "get_category";
const GET_BREAKING_NEWS = "get_breaking_news";
const GET_NEWS = "get_news";
const GET_VIDEO = "get_videos";
const GET_NEWS_BY_CATEGORY = "get_news_by_category";
const GET_BREAKING_NEWS_ID = "get_breaking_news_by_id";
const GET_TAG = "get_tag";
const GET_PAGES = "get_pages";
const GET_LIVE_STREAMING = "get_live_streaming";
const USER_SIGNUP = "user_signup";
const GET_LANGUAGE_JSON_DATA = "get_language_json_data";
const GET_BOOKMARK = "get_bookmark";
const SET_BOOKMARK = "set_bookmark";
const SET_COMMENT = "set_comment";
const GET_COMMENT_BY_NEWS = "get_comment_by_news";
const DELETE_COMMENT = "delete_comment";
const GET_NOTIFICATIONS = "get_notification";
const GET_NEWS_BY_ID = "get_news_by_id";
const SET_LIKE_DISLIKE = "set_like_dislike";
const GET_NEWS_BY_TAG = "get_news_by_tag";
const GET_WEB_SETTINGS = "get_web_settings";
const GET_USER_NOTIFICATION = "get_user_notification";
const DELETE_USER_NOTIFICATION = "delete_user_notification";
const GET_FEATURE_SECTION = "get_featured_sections";
const GET_FEATURE_SECTION_ID = "get_featured_section_by_id";
const SET_USER_CATEGORIES = "set_user_category";
const GET_USER_CATEGORIES = "get_news_by_user_category";
const GET_USER_BY_ID = "get_user_by_id";
const SET_NEWS_VIEW = "set_news_view";
const SET_BREAKING_NEWS_VIEW = "set_breaking_news_view";
const GET_SETTINGS = "get_settings";
const GET_AD_SPACE_NEWS_DETAILS = "get_ad_space_news_details";

//get language from storage
export const getLanguage = () => {
  let language = store.getState().languages.currentLanguage;

  if (language) {
    return language;
  }
  return false;
};

// get user
export const getUser = () => {
  let user = store.getState().user
  if (user.data !== null) {
    return user.data.id;
  } else {
    return user = "0";
 }
}

// 1. generate token
export const generateTokenApi = () => {
  return {
    url: `${GENERATE_TOKEN}`,
    method: "POST",
    data: {
      access_key: access_key,
    },
    authorizationHeader: false,
  };
};

// 2. languages
export const getLanguagesApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${LANGUAGE_LIST}`,
    method: "POST",
    data: {
      access_key: access_key,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 3. get category
export const getCategoriesApi = (offset, limit) => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_CATEGORIES}`,
    method: "POST",
    data: {
      access_key: access_key,
      offset: offset,
      limit: limit,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 4. get breaking news
export const getBreakingNewsApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_BREAKING_NEWS}`,
    method: "POST",
    data: {
      access_key: access_key,
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 5. get news
export const getNewsApi = (offset, limit, get_user_news, search) => {
  let { id: language_id } = getLanguage();
  let user = getUser();
  return {
    url: `${GET_NEWS}`,
    method: "POST",
    data: {
      access_key: access_key,
      offset: offset,
      limit: limit,
      user_id: user,
      get_user_news: get_user_news, //pass user_id (get news where user_id=1, news added from app)
      search: search, //{optional}
      language_id: language_id,
    },
    authorizationHeader: true,
  };
};

// 6. get video
export const getVideoApi = () => {
    let { id: language_id } = getLanguage();
    return {
      url: `${GET_VIDEO}`,
      method: "POST",
      data: {
        access_key: access_key,
        language_id: language_id,
      },
      authorizationHeader: true,
    };
};

// 7. get news by category
export const getNewsByCategoryApi = (category_id, subcategory_id, offset, limit) => {
  let user = getUser();
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_NEWS_BY_CATEGORY}`,
    method: "POST",
    data: {
      access_key:access_key,
	    category_id:category_id,
      subcategory_id:subcategory_id,
      offset:offset,
      limit:limit,
      user_id:user,
      language_id:language_id,
    },
    authorizationHeader: true,
  };
};

// 8. get breaking news id
export const getBreakingNewsIdApi = (breaking_news_id) => {
  let { id: language_id } = getLanguage();
  let user = getUser();
  return {
    url: `${GET_BREAKING_NEWS_ID}`,
    method: "POST",
    data: {
      access_key:access_key,
	    breaking_news_id:breaking_news_id,
      user_id:user,
      language_id:language_id,
    },
    authorizationHeader: true,
  };
};

// 9. get tag
export const getTagApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_TAG}`,
    method: "POST",
    data: {
      access_key:access_key,
      language_id:language_id,
    },
    authorizationHeader: true,
  };
};

//10. get pages
export const getPagesApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_PAGES}`,
    method: "POST",
    data: {
      access_key:access_key,
      language_id:language_id,
    },
    authorizationHeader: true,
  };
};

//11. get live streaming
export const getLiveStreamingApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_LIVE_STREAMING}`,
    method: "POST",
    data: {
      access_key:access_key,
      language_id:language_id,
    },
    authorizationHeader: true,
  };
};

//12. user signup
export const userSignUpApi = (firebase_id,name,email,mobile,type,profile,status,fcm_id) => {
  return {
    url: `${USER_SIGNUP}`,
    method: "POST",
    data: {
      access_key:access_key,
      firebase_id:firebase_id, //Firebase ID
      name:name,
	    email:email,
	    mobile:mobile,
	    type:type, /// gmail / fb / apple / mobile
      profile:profile, //image url
      status:status,   // 1 - Active & 0 Deactive
      fcm_id:fcm_id,
    },
    authorizationHeader: true,
  };
};

//13. get languages json
export const getLanguageJsonDataApi = (code) => {
  return {
    url: `${GET_LANGUAGE_JSON_DATA}`,
    method: "POST",
    data: {
      access_key:access_key,
      code:code,
    },
    authorizationHeader: true,
  };
};

//14. get bookmark
export const getBookmarkApi = (offset,limit) => {
  let { id: language_id } = getLanguage();
  let user = getUser();
  return {
    url: `${GET_BOOKMARK}`,
    method: "POST",
    data: {
      access_key:access_key,
      user_id:user,
      language_id: language_id,
      offset:offset,
      limit:limit,
    },
    authorizationHeader: true,
  };
};

//15. set bookmark
export const setBookmarkApi = (news_id,status) => {
  let user = getUser();
  return {
    url: `${SET_BOOKMARK}`,
    method: "POST",
    data: {
      access_key:access_key,
      user_id:user,
      news_id:news_id,
      status:status,  //1-bookmark, 0-unbookmark
    },
    authorizationHeader: true,
  };
};

// 16. set comment
export const setCommentApi = (parent_id,news_id,message) => {
  let user = getUser();
  return {
    url: `${SET_COMMENT}`,
    method: "POST",
    data: {
      access_key:access_key,
      user_id:user,
      parent_id:parent_id,   //if not exists, set 0
      news_id:news_id,
      message:message,
    },
    authorizationHeader: true,
  };
};

// 17. get comment
export const getCommentByNewsApi = (news_id,offset,limit) => {
  let user = getUser();
  return {
    url: `${GET_COMMENT_BY_NEWS}`,
    method: "POST",
    data: {
      access_key:access_key,
      user_id:user,
      news_id:news_id,
      offset:offset,
      limit:limit,
    },
    authorizationHeader: true,
  };
};

//18. delete comment
export const deleteCommentApi = (comment_id) => {
  let user = getUser();
  return {
    url: `${DELETE_COMMENT}`,
    method: "POST",
    data: {
      access_key:access_key,
      user_id:user,
      comment_id:comment_id
    },
    authorizationHeader: true,
  };
};

//19. get notification
export const getNotificationsApi = (offset, limit) => {
   let { id: language_id } = getLanguage();
  return {
    url: `${GET_NOTIFICATIONS}`,
    method: "POST",
    data: {
      access_key:access_key,
      offset:offset,
      limit: limit,
      language_id:language_id
    },
    authorizationHeader: true,
  };
};

//20. get news by id
export const getNewsByIdApi = (news_id) => {
  let user = getUser();
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_NEWS_BY_ID}`,
    method: "POST",
    data: {
      access_key:access_key,
	    news_id:news_id,
      user_id:user,
      language_id:language_id
    },
    authorizationHeader: true,
  };
};

//21. set likedislike
export const setLikeDisLikeApi = (news_id,status) => {
  let user = getUser();
  return {
    url: `${SET_LIKE_DISLIKE}`,
    method: "POST",
    data: {
      access_key:access_key,
	    user_id:user,
      news_id:news_id,
      status:status,    // 1=like, 2=dislike, 0=none
    },
    authorizationHeader: true,
  };
};

//22. get news by tag
export const getNewsByTagApi = (tag_id) => {
  let user = getUser();
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_NEWS_BY_TAG}`,
    method: "POST",
    data: {
      access_key:access_key,
	    user_id:user,
      tag_id:tag_id,
      language_id:language_id
    },
    authorizationHeader: true,
  };
};

//23. get web settings
export const getWebSettingsApi = () => {
  return {
    url: `${GET_WEB_SETTINGS}`,
    method: "POST",
    data: {
      access_key:access_key,
    },
    authorizationHeader: true,
  };
};

//24. get user notification
export const getUserNotificationApi = (offset, limit) => {
  let user = getUser();
  return {
    url: `${GET_USER_NOTIFICATION}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id:user,
      offset :offset,
      limit:limit,
    },
    authorizationHeader: true,
  };
};

//25. delete user notification
export const DeleteUserNotificationApi = (id) => {
  return {
    url: `${DELETE_USER_NOTIFICATION}`,
    method: "POST",
    data: {
      access_key: access_key,
      id:id,
    },
    authorizationHeader: true,
  };
};

//26. get feature sections
export const getFeatureSectionApi = () => {
  let user = getUser();
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_FEATURE_SECTION}`,
    method: "POST",
    data: {
      access_key: access_key,
      language_id: language_id,
      user_id: user,
    },
    authorizationHeader: true,
  };
};

// 27. get feature section by id
export const getFeatureSectionByIdApi = (section_id,offset,limit) => {
  let user = getUser();
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_FEATURE_SECTION_ID}`,
    method: "POST",
    data: {
      access_key: access_key,
      section_id:section_id,
        language_id: language_id,
        user_id: user,
        offset:offset,
        limit:limit,
    },
    authorizationHeader: true,
  };
};

// 28. set user categories
export const setUserCategoriesApi = (category_id) => {
  let user = getUser();
  return {
    url: `${SET_USER_CATEGORIES}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id:user,
      category_id:category_id,
    },
    authorizationHeader: true,
  };
};

// 29. get user categories
export const getUserCategoriesApi = (category_id,offset,limit) => {
  let user = getUser();
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_USER_CATEGORIES}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id:user,
      category_id:category_id,
      offset:offset,
      limit:limit,
      language_id:language_id
    },
    authorizationHeader: true,
  };
};

// 30. get user by id
export const getUserByIdApi = () => {
  let user = getUser();
  return {
    url: `${GET_USER_BY_ID}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id:user,
    },
    authorizationHeader: true,
  };
};

// 31. set news view
export const setNewsViewApi = (news_id) => {
  let user = getUser();
  return {
    url: `${SET_NEWS_VIEW}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id:user,
      news_id:news_id,
    },
    authorizationHeader: true,
  };
};

// 32. set breaking news view
export const setBreakingNewsViewApi = (breaking_news_id) => {
  let user = getUser();
  return {
    url: `${SET_BREAKING_NEWS_VIEW}`,
    method: "POST",
    data: {
      access_key: access_key,
      user_id:user,
      breaking_news_id:breaking_news_id,
    },
    authorizationHeader: true,
  };
};

// 33. get settings
export const getSettingsApi = () => {
  return {
    url: `${GET_SETTINGS}`,
    method: "POST",
    data: {
      access_key: access_key,
    },
    authorizationHeader: true,
  };
};

// 34. get ad space news details
export const getAdsSpaceNewsDetailsApi = () => {
  let { id: language_id } = getLanguage();
  return {
    url: `${GET_AD_SPACE_NEWS_DETAILS}`,
    method: "POST",
    data: {
      access_key: access_key,
      language_id:language_id,
    },
    authorizationHeader: true,
  };
};