import React from "react";
import HomePostList from "../home-post-list";
import homePostArray from "../home-post-list/home-post.json";


const HomeComponent = () => {

    return (
        <>

            <tr className="row">
                <td className="col-1"></td>
                <td className="col-9">
                    <i className="bi bi-arrow-counterclockwise"></i>
                    <span className="text-muted fw-bold">Elon Musk Retweeted</span>
                </td>

            </tr>

            {homePostArray.map((post) => (
                <HomePostList key={post._id} post={post}/>
            ))}

        </>
    );

}
export default HomeComponent