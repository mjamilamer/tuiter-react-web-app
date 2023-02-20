import post from "./post.js";
import PostItem from "./PostItem.js"

const PostList = () => `
<table class="container-fluid "> 
    <thead></thead>
    <tbody>
        ${post.map(item => PostItem(item)).join('')}
        <tr>
            <td>
                <!-- 4 symbols heart retweet etc. -->
            </td>
        </tr>       
    </tbody>
</table>`;

export default PostList;