export interface InstagramPost {
  id: string;
  postId: string;
  caption: string;
  date?: string;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    postId: "DOP6Xthj3hp",
    caption: "1주차",
    // date: "2025-09-06",
  },
  {
    id: "2",
    postId: "DOe9C_kj7Nl",
    caption: "2주차",
    // date: "2025-09-12",
  },
  {
    id: "3",
    postId: "DOtIzmNj4VT",
    caption: "3주차",
  },
  {
    id: "4",
    postId: "DPJFSTQjxUy",
    caption: "4주차",
  },
  {
    id: "5",
    postId: "DPWDkqHEaee",
    caption: "5주차",
  },
  {
    id: "6",
    postId: "DPs3QJsD601",
    caption: "6주차",
  },
  {
    id: "7",
    postId: "DQORyucj-Gu",
    caption: "7주차",
  },
  {
    id: "8",
    postId: "DQgp-XMj_6m",
    caption: "8주차",
  },
  {
    id: "10",
    postId: "DQ1dLYxD8jc",
    caption: "10주차",
  },
];

export function getInstagramThumbnail(
  postId: string,
  size: "t" | "m" | "l" = "l"
) {
  return `https://www.instagram.com/p/${postId}/media/?size=${size}`;
}

export function getInstagramPostUrl(postId: string) {
  return `https://www.instagram.com/p/${postId}/`;
}
