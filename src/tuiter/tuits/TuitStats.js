import React, {useState} from 'react';

export const usePostState = (initialState) => {
    const [post, setPost] = useState(initialState);
    const [liked, setLiked] = useState(false);
    const [replied, setReplied] = useState(false);

    const handleLikeClick = () => {
        if (liked) {
            setPost((prevPost) => {
                return {...prevPost, likes: prevPost.likes - 1};
            });
            setLiked(false);
        } else {
            setPost((prevPost) => {
                return {...prevPost, likes: prevPost.likes + 1};
            });
            setLiked(true);
        }
    };

    const handleReplyClick = () => {
        if (replied) {
            setPost((prevPost) => {
                return {...prevPost, replies: prevPost.replies - 1};
            });
            setReplied(false);
        } else {
            setPost((prevPost) => {
                return {...prevPost, replies: prevPost.replies + 1};
            });
            setReplied(true);
        }
    };

    const handleRetuitClick = () => {
        setPost((prevPost) => {

            return {...prevPost, retuits: prevPost.retuits + 1};
        });
    };

    return {post, handleLikeClick, handleReplyClick, handleRetuitClick};
};

const TuitStats = ({post}) => {
    const {post: statePost, handleLikeClick, handleReplyClick, handleRetuitClick} = usePostState(
        post
    );
    const {likes, replies, retuits, liked, replied} = statePost;

    return (
        <div className="row">
            <div className="col-3">
                <button className={`btn btn-link text-decoration-none px-0 me-3 `}
                        onClick={handleReplyClick}>
                    <i className={`bi bi-chat `}></i>
                    <span className="text-muted ms-1">{replies}</span>

                </button>
            </div>
            <div className="col-3">
                <button className={`btn btn-link text-decoration-none px-0 me-3 ${liked ? "text-danger" : ""}`}
                        onClick={handleLikeClick}>
                    <i className={`bi bi-heart${liked ? "-fill" : ""}`}></i>
                    <span className="text-muted ms-1">{likes}</span>
                </button>
            </div>
            <div className="col-3">
                <button className="btn btn-link text-decoration-none px-0 me-3" onClick={handleRetuitClick}>
                    <i className="bi bi-arrow-counterclockwise"></i>
                    <span className="text-muted ms-1">{retuits}</span>
                </button>
            </div>
            <div className="col-3">
                <button className="btn btn-link text-decoration-none px-0">
                    <i className="bi bi-upload"></i>
                </button>
            </div>
        </div>
    );
}
export default TuitStats;