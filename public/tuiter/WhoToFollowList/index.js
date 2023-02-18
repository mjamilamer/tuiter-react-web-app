import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";


const WhoToFollowList = () => `
    <div>
        <table class="table override-follow-style">
            <thead>
                <tr>
                    <th class="fw-bold remove-bottom-border" colSpan="3">Who to follow</th>
                </tr>
            </thead>
            <tbody>
                ${who.map(item => WhoToFollowListItem(item)).join('')}
                <tr class="d-table ">
                    <td class="col-5 w-25">
                        <span class="wd-twitter-blue fw-bold"> Show more</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>`;
export default WhoToFollowList;