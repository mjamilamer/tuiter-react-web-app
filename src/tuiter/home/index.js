import React from "react";
import HomePostList from "../home-post-list";
import homePostArray from "../home-post-list/home-post.json";


const HomeComponent = () => {

    return (
        <>
            {
                homePostArray.map(post =>
                    <HomePostList
                        key={post._id} post={post}/>
                )
            }
        </>
    );

}
export default HomeComponent