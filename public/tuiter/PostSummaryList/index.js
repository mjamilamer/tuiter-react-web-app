import post from "./posts.js";

import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => `
<table class="table">
    <thead>
    <tr>
        <div class="position-relative override-padding">
            <img src="../images/australian-open-2023.jpg" class="card-img-top"
                 alt="...">
            <div class="position-absolute text-white wd-img-pos">
                <p class="mb-0">Tennis Tournament - LIVE</p>
                <h4 class="fw-bold">Australian Open 2023</h4>
            </div>
        </div>
    </tr>
    </thead>
    <tbody>
        ${post.map(item => PostSummaryItem(item)).join('')}
    </tbody>
</table>
`
export default PostSummaryList;