function WhoToFollowListItem(who) {
    const {avatarIcon, userName, handle} = who;

    return (`
        <tr class="d-table ">
            <td class="col-1">
                <img class="img-fluid override-img-size-lg rounded-circle"
                     src="${avatarIcon}"
                     alt="${userName}'s Avatar">
            </td>
            <td class="col-9">
                <div>
                    <span class="fw-bold ">${userName}</span>
                    <span> <i
                        class="bi bi-patch-check-fill override-color-twitter-blue"></i>
                        </span>
                </div>
                <div class="text-muted">@${handle}</div>

            </td>
            <td class="col-2">
                <button type="submit"
                        class="btn btn-primary rounded-pill override-color-black">
                    Follow
                </button>
            </td>
        </tr>
  `);
}

export default WhoToFollowListItem;