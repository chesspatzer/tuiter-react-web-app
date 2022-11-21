import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../../services/tuits-thunks";
// import {likeTuit} from "../tuits-reducer";

const TuitStatItem = ({post}) => {
    const dispatch = useDispatch();
    const likeToggleHandler = (id) => {
        dispatch(updateTuitThunk({
            ...post,
            likes:  post.liked ? post.likes - 1 : post.likes + 1,
            liked: !post.liked
        }))
    };

    const dislikeToggleHandler = (id) => {
        dispatch(updateTuitThunk({
            ...post,
            dislikes:  post.disliked ? post.dislikes - 1 : post.dislikes + 1,
            disliked: !post.disliked
        }))
    };


    return (
            <div className="row border-0 mt-2">
                <span className="col">
                    <i className="ps-4 fa-regular fa-comment"> </i>
                    <span className="ps-2">{post.replies}</span>
                </span>
                <span className="col">
                    <span className="ps-4 fas fa-retweet"> </span>
                    <span className="ps-2">{post.retuits}</span>
                </span>
                <span className="col">
                    <span className= "ps-4">
                   <span className={`ps-2 pe-1 small ${post.liked? 'text-danger fa-solid fa-heart' :'fa-regular fa-heart'}`}
                      onClick={() => {likeToggleHandler(post._id)}}></span>
                        {post.likes}</span>
                </span>
                <span className="col">
                    <span className= "ps-4">
                   <span className={`ps-2 pe-1 small ${post.disliked? 'text-primary fas fa-thumbs-down' :'fa-regular fa-thumbs-down'}`}
                         onClick={() => {dislikeToggleHandler(post._id)}}></span>
                        {post.dislikes}</span>
                </span>
                <span className="col">
                    <span className="ps-4 fa fa-share-alt"></span>
                </span>
            </div>
        );
};
export default TuitStatItem;

