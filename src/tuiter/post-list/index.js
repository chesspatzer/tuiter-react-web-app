import React from "react";
import postsItemsArray from './postItems.json';
import PostItem from "./post-item";

const PostList = () => {
    return(
        <ul className="list-group">
            {
                postsItemsArray.map(post => <PostItem key={post._id} postItem={post} retuitPost={filterById(postsItemsArray, post.retuit_post_id)} /> )
            }
        </ul>
    );
};
export default PostList;

function filterById(jsonObject, id) {return jsonObject.filter(function(jsonObject) {return (jsonObject['_id'] == id);})[0];}

