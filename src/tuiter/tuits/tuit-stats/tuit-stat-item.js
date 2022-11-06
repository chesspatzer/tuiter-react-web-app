import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit} from "../tuits-reducer";

const TuitItem = ({post}) => {
    const dispatch = useDispatch();
    const likeToggleHandler = (id) => {
        dispatch(likeTuit(id));
    };
    return (
            <div className="row border-0">
                <span className="col-3">
                    <i className="ps-4 fa-regular fa-comment"> </i>
                    <span className="ps-2">{post.replies}</span>
                </span>
                <span className="col-3">
                    <span className="ps-4 fas fa-retweet"> </span>
                    <span className="ps-2">{post.retuits}</span>
                </span>
                <span className="col-3">
                    <span className= "ps-4">
                   <span className={`ps-2 pe-1 small ${post.liked? 'text-danger fa-solid fa-heart' :'fa-regular fa-heart'}`}
                      onClick={() => {likeToggleHandler(post._id)}}></span>
                        {post.likes}</span>

                </span>
                <span className="col-3">
                    <span className="ps-4 fa fa-share-alt"></span>
                </span>
            </div>
        );
};
export default TuitItem;

