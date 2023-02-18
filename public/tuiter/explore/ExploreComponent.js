import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
            <div class="col-sm-11 ">
                <input type="search"
                   class="form-control rounded-pill"
                   placeholder=" &#xF52A;    Search Tuitter"
                   aria-label="Search">
            </div>
            <div class="col-sm-1 align-self-center">
                <a href="explore-settings.html">
                <i class="fa fa-cog fa-2x "> </i>
                </a>
            </div>
            </div class="">
                <ul class="nav nav-tabs mt-2 ">
                    <li class="nav-item">
                        <a class="nav-link active" href="for-you.html"> For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="trending.html"> Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="news.html"> News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sports.html"> Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a class="nav-link " href="entertainment.html"> Entertainment</a>
                    </li>
                </ul>
                ${PostSummaryList()}
    `)
}
export default ExploreComponent;