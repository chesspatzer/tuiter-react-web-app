import React from "react";
import "./index.css";



const PostItem = (
    {
        postItem = {
            "_id": 123,
            "userName": "SpaceX",
            "handle": "SpaceX",
            "avatar": "spacex-logo.jpeg",
            "time": "23h",
            "post": "Dennis and Akiko Tito are the first two crewmembers on Starship's second commercial spaceflight around the Moon",
            "image": "dennis-akiko.jpeg",
            "comments": "595",
            "retuits": "1,168",
            "likes": "11.1K",
            "thread": true,
        },
        retuitPost = {

        },

    },

) => {

    if (postItem.retuited_at!=null) {
        return (<></>)
    }

    let thread = getThread(postItem);

    let tuitImage = getTuitImage(postItem)

    let retuitPostComponent = getRetuitPostComponent(retuitPost)

    let retuitTag = getRetuitTag(postItem);

    return (
        <li className="list-group-item">
            <div className="row">
                {retuitTag}
                <div className="col-1">
                    <div>
                        <img width={50} className="rounded-circle" src={`/img/${postItem.avatar}`}/>
                    </div>
                </div>
                <div className="col-11 ps-4">
                    <div>
                        <span className="fw-bolder">{postItem.userName}</span>
                        <span><i className="fas fa-check-circle ps-1"></i></span>
                        <span className="text-secondary ps-1">@{postItem.handle} . {postItem.time}</span>
                    </div>
                    <div className="mb-2">{postItem.post}</div>
                    {tuitImage}
                    {retuitPostComponent}
                    <div className="row mt-3 mb-1">
                        <div className="col-3 text-secondary">
                            <i className="far fa-comment me-1 ps-3"></i>{postItem.comments}
                        </div>
                        <div className="col-3 text-secondary">
                            <i className="fas fa-retweet me-1 ps-3"></i>{postItem.retuits}
                        </div>
                        <div className="col-3 text-secondary">
                            <i className="far fa-heart me-1 ps-3"></i>{postItem.likes}
                        </div>
                        <div className="col-3 text-secondary">
                            <i className="fas fa-upload me-1 ps-3"></i>
                        </div>
                    </div>
                    {thread}
                </div>
            </div>
        </li>
    );
};
export default PostItem;


function getTuitImage(postItem) {
    return postItem.image ? (<div><img className="wd-border" src={`/img/${postItem.image}`} height="100%" width="100%"/>
    </div>) : <></>;
}

function getRetuitPostComponent(retuitPost) {
    return Object.keys(retuitPost).length === 0 ? <></> :
        <div className="wd-border p-2 mt-2">
            <div>
                <span className="pe-1"><img width={30} className="rounded-circle"
                                            src={`/img/${retuitPost.avatar}`}/></span>
                <span className="fw-bolder">{retuitPost.userName}</span>
                <span><i className="fas fa-check-circle ps-1"></i></span>
                <span className="text-secondary ps-1">@{retuitPost.handle} . {retuitPost.time}</span>
                <div className="mb-2">{retuitPost.post}</div>
            </div>


        </div>;
}

function getThread(postItem) {
    return postItem.thread ? (<div className="mt-4 mb-2">
        <a className='text-decoration-none' href='https://twitter.com/inspiration4x'>Show this thread </a>
    </div>) : <></>
}

function getRetuitTag(postItem){
    return postItem.isRetuit ?
        <span>
            <span className="ps-5 text-secondary" >
                <i className="fas fa-retweet"></i>
            </span>
            <span className="ps-2 text-secondary">
                {postItem.userName} Retuited
            </span>
        </span>

: <span></span>
}
