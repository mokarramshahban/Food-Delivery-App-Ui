export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const RESTAURANT_API =
  "https://corsproxy.io/?url=" +
  encodeURIComponent(
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.6333946&lng=74.86724269999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
  );

export const MENU_API =
  "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=31.6333946&lng=74.86724269999999&restaurantId=";

export const GITHUB_USER_API = "https://api.github.com/users/mokarramshahban";
