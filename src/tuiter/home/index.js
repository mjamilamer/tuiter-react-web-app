import React from "react";
import HomePostList from "../home-post-list";
import {useSelector} from 'react-redux';
import WhatsHappening from "./whats-happening";


const HomeComponent = () => {
    const tuits = useSelector(state => state.tuits);
    return (
        <table>
            <tbody>
            <tr className="row">
                <WhatsHappening/>
            </tr>
            <tr className="row">
                <td className="col-1"></td>
                <td className="col-9">
                    <i className="bi bi-arrow-counterclockwise"></i>
                    <span className="text-muted fw-bold">Elon Musk Retweeted</span>
                </td>

            </tr>
            <tr>
                {tuits.map((post) => (
                    <HomePostList key={post._id} post={post}/>
                ))}
            </tr>
            </tbody>
        </table>
    );

}
export default HomeComponent