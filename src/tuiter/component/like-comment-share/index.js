const LikeCommentShare = () => {
    return (
        <ul className="list-group list-group-horizontal border-0 ">
            <li className="list-group-item flex-fill override-background-border">

                <i className="bi bi-chat pe-2"></i>
                <span className="text-muted">12</span>

            </li>
            <li className="list-group-item flex-fill override-background-border">

                <i className="fa fa-retweet pe-2"></i>
                <span className="text-muted">4</span>

            </li>
            <li className="list-group-item flex-fill override-background-border">


                <i className="bi bi-heart pe-2"></i>
                <span className="text-muted">7</span>

            </li>
            <li className="list-group-item flex-fill override-background-border">

                <i className="bi bi-upload pe-2"></i>
                <span className="text-muted"></span>
            </li>
        </ul>
    );
}
export default LikeCommentShare;