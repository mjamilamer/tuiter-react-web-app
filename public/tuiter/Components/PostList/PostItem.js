function PostItem(post) {
    const {avatar, userName, handle, time, title, image, postTitle, description} = post;


    return (`
    <div >
        <tr class="row ">
            <td class="col-2">
                <img class="img-thumbnail override-img-50 rounded-circle"
                     src="${avatar}"
                     alt="${handle}'s Avatar">
            </td>
            <td class="col-9">
                <div>
                    <span class="fw-bold text-white">${userName}</span>
                    <span class="text-muted">${handle}  -${time}</span>
                    <span> <i
                        class="bi bi-patch-check-fill override-color-twitter-blue"></i>
                        </span>
                </div>
                <div class="text-white">
                    ${title}
                </div>
            </td>
            <td class="col-1 ps-4">
                <i class="bi bi-three-dots override-color"></i>                   
            </td>
        </tr>
        <tr class="row">
            <td class="col-2"></td>
            <td class="col-10 ">
                <div class="card ">
                    <img src="${image}" class="card-img-top override-bottom-border " alt="...">
                    <div class="card-body override-background-black  p-2 ">
                        <p class="card-title h5">${postTitle}</p>
                        <p class="card-text">${description}</p>
                    </div>
                </div>
                <div class="pb-2 "><ul class="list-group list-group-horizontal ">
                    <li class="list-group-item flex-fill override-background-border">
                        
                            <i class="bi bi-chat pe-2"></i>
                            <span class="text-muted">12</span>
                   
                    </li>
                    <li class="list-group-item flex-fill override-background-border">
                       
                            <i class="fa fa-retweet pe-2"></i>
                            <span class="text-muted">4</span>
                  
                    </li>
                    <li class="list-group-item flex-fill override-background-border">
                       
                            <i class="bi bi-heart pe-2"></i>
                            <span class="text-muted">7</span>
                      
                    </li>
                    <li class="list-group-item flex-fill override-background-border">
                       
                            <i class="bi bi-upload pe-2"></i>
                            <span class="text-muted"></span>
                    </li>
                </ul></div>
            </td> 
        </tr>    
    </div>
    `)
}

export default PostItem;