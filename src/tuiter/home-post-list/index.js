import React from "react";
import LikeCommentShare from "../component/like-comment-share";


const HomePostList = (
    {
        post = {
            "avatar": "../images/Elon_Musk.jpg",
            "userName": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23h",
            "title": "Amazing show about @inspiration4x mission!",
            "image": "../images/inspirational.jpg",
            "postTitle": "Countdown: Inspirational4 Mission to Space | Netflix Official Site",
            "description": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ... netflix.com"
        }
    }
) => {
    return (
        <div>
            <tr className="row ">
                <td className="col-2">
                    <img width={70} className="float-end rounded-circle"
                         src={`../tuiter/images/${post.avatar}`}
                         alt={post.handle}/>
                </td>
                <td className="col-9">
                    <div>
                        <span className="fw-bold ">{post.userName}</span>
                        <span>
                            <i className="bi bi-patch-check-fill text-primary "></i>
                        </span>
                        <span className="text-muted">{post.handle} -{post.time}</span>

                    </div>
                    <div>
                        {post.title}
                    </div>
                </td>
                <td className="col-1 ps-4">
                    <i className="bi bi-three-dots override-color"></i>
                </td>
            </tr>
            <td className="col-2"></td>
            <td className="col-10 ">
                <div className="card ">
                    <img src={`../tuiter/images/${post.image}`}
                         className="card-img-top override-bottom-border "
                         alt="..."/>
                </div>
                <div className="pb-2 ">
                    <LikeCommentShare/>
                </div>
            </td>
        </div>
    );
};
export default HomePostList;