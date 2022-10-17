
const WhoToFollowListItem = (who) => {
    return(`
                <li class="list-group-item ">
                    <div class="row">
                        <div class="col-2">
                            <img src=${who.avatarIcon} width="100%" class="wd-follow-img"/>
                        </div>
                        <div class="col-6 ">
                            <span>${who.userName}</span>
                            <span><span>
                                <i class="fas fa-check-circle fa-inverse"></i>
                             </span></span>
                            <br>
                            <div>@${who.handle}</div>
                        </div>
                        <div class="col-3">
                            <button class="btn btn-primary rounded-pill">Follow</button>
                        </div>
                    </div>
                </li>
             
    `);
}

export default WhoToFollowListItem;
