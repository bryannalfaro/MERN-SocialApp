import React from "react";
import PostIndividual from "./Post/PostIndividual";
import styleApp from './styles'
const Post = () => {
    const classes = styleApp();
    return (
      <div>
        <h1>Posts</h1>
        <PostIndividual />
        <PostIndividual />
      </div>
    );
  };

  export default Post;