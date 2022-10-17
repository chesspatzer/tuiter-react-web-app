const PostItem = (postItem) => {
    if (postItem.imageHeader!="") {
        return(`
             <li class="list-group-item">
                <div class="row">
                    <div class="col-1">
                        <img src=${postItem.avatar} class="rounded-circle" style="width: 50px">
                    </div>
                    <div class="col-11 ps-4">
                         <span>${postItem.username}</span>
                         <span><span><i class="fas fa-check-circle fa-inverse"></i></span></span>
                         <span class="ps-1 text-secondary">@${postItem.handle} . ${postItem.time}</span>
                         <span class="float-end"><i class="fas fa-ellipsis-h fa-inverse"></i></span>
                         <div>${postItem.tuit}</div>
                         <div class="mt-2 wd-tweet-home-border">
                                <div style="height: 270px">
                                    <img class="wd-tweet-image-with-content" src="${postItem.image}" height="100%" width="100%"/>
                                </div>
                                <div class="ps-3 pt-2">${postItem.imageHeader}</div>
                                <div class="ps-3 pe-3 text-secondary"> ${postItem.imageContents}</div>
                                <div class="text-secondary ps-3 pb-3"><i class="fas fa-link"></i> ${postItem.imageWebsite}.com</div>
                              </div>
                          <div class="row mt-3 mb-1">
                        <div class="col-3 text-secondary">
                            <i class="far fa-comment me-1"></i> ${postItem.comments}
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="fas fa-retweet me-1"></i> ${postItem.retuits}
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="far fa-heart me-1"></i> ${postItem.likes}
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="fas fa-upload me-1"></i>
                        </div>
                      </div>
                    </div>
                </div>
             </li>
    `);} else {
        return(`
             <li class="list-group-item">
                <div class="row">
                    <div class="col-1">
                        <img src=${postItem.avatar} class="rounded-circle" style="width: 50px">
                    </div>
                    <div class="col-11 ps-4">
                         <span>${postItem.username}</span>
                         <span><span><i class="fas fa-check-circle fa-inverse"></i></span></span>
                         <span class="ps-1 text-secondary">@${postItem.handle} . ${postItem.time}</span>
                         <span class="float-end"><i class="fas fa-ellipsis-h fa-inverse"></i></span>
                         <div>${postItem.tuit}</div>
                         <div class="mt-2 wd-tweet-home-border">
                                <div style="height: 350px">
                                    <img class="wd-tweet-image-without-content" src="${postItem.image}" height="100%" width="100%"/>
                                </div>
                         </div>
                      <div class="row mt-3 mb-2">
                        <div class="col-3 text-secondary">
                            <i class="far fa-comment me-1"></i> ${postItem.comments}
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="fas fa-retweet me-1"></i> ${postItem.retuits}
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="far fa-heart me-1"></i> ${postItem.likes}
                        </div>
                        <div class="col-3 text-secondary">
                            <i class="fas fa-upload me-1"></i>
                        </div>
                      </div>
                    </div>
                </div>
             </li>
    `)
    }
}

export default PostItem;

