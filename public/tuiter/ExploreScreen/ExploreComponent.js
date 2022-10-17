
import PostSummaryList from "../PostSummaryList/index.js";
const ExploreComponent = () => {
    return(`
            <div class="row" style="margin-bottom: 8px">
                       <!-- search field and cog -->
                <div class="position-relative">
                    <div class="row">
                        <div class="col-11">
                            <input class="ms-2 ps-5 form-control rounded-pill p-2"
                                   placeholder="Search Tuiter"/>
                        </div>
                        <div class="col-1 p-2">
                            <i class="fas fa-cog fa-lg fa-gear wd-settings"></i>
                        </div>
                    </div>
                    <span class="position-absolute wd-search-tuiter wd-search-icon">
                        <i class="fa fa-search" style="margin-left: 15px; margin-top: 10px"></i>
                    </span>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html" tabindex="-1">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-md-block" href="entertainment.html" tabindex="-1">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
                <img src="../../img/spacex.png" class="w-100"/>
                <h2 class="position-absolute bottom-0 ps-3 text-white">
                    SpaceX's Starship
                </h2>
            </div>
           
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

