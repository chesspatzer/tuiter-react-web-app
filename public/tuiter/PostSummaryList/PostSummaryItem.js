
const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item wd-block-border">
            <div class="row">
                <div class="col-10">
                   <div class="text-secondary">${post.topic}</div>
                    <span class="fw-bolder wd-text-color">${post.userName}</span>
                    <span><i class="fas fa-check-circle fa-inverse"></i></span>
                    <span class="text-secondary">- ${post.time}</span>
                    <div class="fw-bold wd-text-color" style="width: 90%">${post.title}</div>
                </div>
                <div class="col-2">
                    <img src=${post.image} height="100px" class="float-end rounded"/>   
                </div>
            </div>
        </li>   
   `);
}

export default PostSummaryItem;