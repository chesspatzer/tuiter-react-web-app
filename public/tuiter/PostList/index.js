import PostSummaryItem from "./PostItem.js";
import postItems from "./postItems.js";

const PostSummaryList = () => {
    return (`
           <ul class="list-group">
           <!-- continue here -->
            ${postItems.map(item => {return(PostSummaryItem(item));}).join(' ')}
           </ul>
`); }

export default PostSummaryList;