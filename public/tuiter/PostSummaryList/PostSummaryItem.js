function PostSummaryItem(post) {
    const {topic, userName, time, title, image} = post;

    return (`
        <tr class="table-responsive container">
            <td class="col-10 ps-4">
                <div class="text-muted">${topic}</div>
                <div>
                    <span class="fw-bold ">${userName}</span>
                    <span><i class="bi bi-patch-check-fill override-color-twitter-blue"></i></span>
                    <span class="text-muted"> -${time}</span>
                </div>
                <div class=" fw-bold ">${title}</div>

            </td>
            <td class="col-2">
                <img class="img-thumbnail override-img " src="${image}" alt="${userName}">
            </td>
        </tr>
    `);
}

export default PostSummaryItem;