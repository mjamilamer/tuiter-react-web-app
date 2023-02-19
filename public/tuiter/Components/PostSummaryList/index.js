import post from "./posts.js";

import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => `
<table class="table">
    <thead>
    <tr><img src="../images/11DATING-GLOSSARY.jpg" class="card-img-top" alt="..."></tr>
    </thead>
    <tbody>
        ${post.map(item => PostSummaryItem(item)).join('')}
    </tbody>
</table>
`
export default PostSummaryList;