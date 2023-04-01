import React from "react";
// import {deleteTuit} from "../tuits/tuits-reducer";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        tuit
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    return (

        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div>{tuit.userName} . {tuit.time}</div>
                    <div className="fw-bolder">{tuit.topic}</div>
                    <div>{tuit.title}</div>
                    <div className="align-content-end">
                        <i typeof="button" className=" btn btn-sm bi bi-x-lg  float-end"
                           onClick={() => deleteTuitHandler(tuit._id)}>

                        </i>
                    </div>

                </div>
                <div className="col-2">
                    <img width={55} className="float-end rounded-3"
                         src={`../tuiter/images/${tuit.avatar}`}
                         alt="..."/>
                </div>
            </div>
        </li>
    )
}
export default TuitItem;