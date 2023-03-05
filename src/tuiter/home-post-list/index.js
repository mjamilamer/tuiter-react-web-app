import React from "react";
import LikeCommentShare from "../component/like-comment-share";

const HomePostList = ({post}) => {
    const isRetweet = post.retweet;
    const likeComment = post.likeComment;

    return (
        <>
            {!isRetweet && (
                <>
                    <tr className="row">
                        <td className="col-2">
                            <img
                                width={70}
                                className="float-end rounded-circle"
                                src={`../tuiter/images/${post.avatar}`}
                                alt={post.handle}
                            />
                        </td>
                        <td className="col-9">
                            <div>
                                <span className="fw-bold me-1 ">{post.userName}</span>
                                <span><i
                                    className="bi bi-patch-check-fill text-primary me-1 "></i>
                                </span>
                                <span className="text-muted me-1">{post.handle} - {post.time}</span>
                            </div>

                            {post.description &&
                                <div>
                                    {post.description}
                                </div>
                            }
                        </td>
                        <td className="col-1 ps-4">
                            <i className="bi bi-three-dots override-color"></i>
                        </td>
                    </tr>
                    <tr>
                        <td className="col-2"/>
                        <td>
                            {post.image && (
                                <div className="card ">
                                    <img
                                        src={`../tuiter/images/${post.image}`}
                                        className="card-img-top override-bottom-border"
                                        alt="..."
                                    />
                                </div>
                            )}
                            <div className="pb-2">{(!isRetweet && likeComment) &&
                                <>
                                    <LikeCommentShare/>
                                    <p className="text-primary">Show this thread</p>
                                </>
                            }</div>
                        </td>
                    </tr>
                </>
            )}
            {isRetweet && (
                <tr className="row">
                    <td className="col-2"></td>
                    <td className="col-10">
                        <div className="container ">
                            <div className="border rounded p-1">
                                <img width={35}
                                     className="rounded-circle me-1 "
                                     src={`../tuiter/images/${post.avatar}`}
                                     alt="..."
                                />
                                <span className="fw-bold me-1 ">{post.userName}</span>
                                <span><i
                                    className="bi bi-patch-check-fill text-primary me-1 "></i></span>
                                <span className="text-muted me-1">{post.handle} - {post.time}</span>
                                {post.description && <div>{post.description}</div>}
                            </div>
                            <div className="pb-2"><LikeCommentShare/></div>
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};

export default HomePostList;
