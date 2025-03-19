// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const postApi = createApi({
//   reducerPath: "postsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://nt-devconnector.onrender.com/api/",
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         headers.set("x-auth-token", token);
//       }
//       return headers;
//     },
//   }),

//   endpoints: (builder) => ({
//     getPosts: builder.query({
//       query: () => "posts",
//     }),
//   }),
// });
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://nt-devconnector.onrender.com/api",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("token");
    if (token) {
      headers.set("x-auth-token", token);
    }
    return headers;
  },
});

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery,
  tagTypes: ["Posts"],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    addPost: builder.mutation({
      query: (newPost) => ({
        url: "/posts",
        method: "POST",
        body: newPost,
      }),
      invalidatesTags: ["Posts"],
    }),
    deletePost: builder.mutation({
      query: (postId) => ({
        url: `/posts/${postId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    likePost: builder.mutation({ // ✅ Like qilish
      query: (postId) => ({
        url: `/posts/like/${postId}`,
        method: "PUT",
        headers: {
          "x-auth-token": localStorage.getItem("token"), // ✅ Token qo‘shish
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    unlikePost: builder.mutation({ // ✅ Unlike qilish
      query: (postId) => ({
        url: `/posts/unlike/${postId}`,
        method: "PUT",
        headers: {
          "x-auth-token": localStorage.getItem("token"), // ✅ Token qo‘shish
        },
      }),
      invalidatesTags: ["Posts"],
    }),
    addComment: builder.mutation({
      query: ({ postId, text }) => ({
        url: `/posts/comment/${postId}`,
        method: "POST",
        body: { text },
      }),
      invalidatesTags: ["Posts"],
    }),
    deleteComment: builder.mutation({
      query: ({ postId, commentId }) => ({
        url: `/posts/comment/${postId}/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
  }),
});

export const { 
  useGetPostsQuery, 
  useAddPostMutation, 
  useDeletePostMutation, 
  useLikePostMutation,  // ✅ Eksport qilishni unutma!
  useUnlikePostMutation, // ✅ Eksport qilishni unutma!
  useAddCommentMutation,
  useDeleteCommentMutation 
} = postsApi;

