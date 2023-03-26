import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {faCalendarAlt, faLink, faMapMarkerAlt,} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import EditProfile from "../editProfile/EditProfile";

const ProfileComponent = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const handleEditProfile = () => {
        dispatch(EditProfile(profile));
    };

    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div>
                    <img className="w-100" src={`../tuiter/images/${profile.bannerPicture}`} alt="Banner"/>
                </div>
            </div>
            <div className="row profile-info">
                <div className="col-2">
                    <div className="d-flex justify-content-center mb-3">
                        <img
                            src={`../tuiter/images/${profile.profilePicture} `}
                            alt="Profile"
                            className="rounded-circle shadow"
                            width="130"
                        />
                    </div>
                </div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5>
                                    <FontAwesomeIcon
                                        icon={faMapMarkerAlt}
                                        className="text-primary me-2"
                                    />
                                    {profile.location}
                                </h5>
                                <h5>
                                    <FontAwesomeIcon
                                        icon={faCalendarAlt}
                                        className="text-primary me-2"
                                    />
                                    Joined {new Date(profile.dateJoined).getFullYear()}
                                </h5>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-1">
                                <h5>
                                    <FontAwesomeIcon
                                        icon={faTwitter}
                                        className="text-primary me-2"
                                    />
                                    <a
                                        href={`https://twitter.com/${profile.handle}`}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {`@${profile.handle}`}
                                    </a>
                                </h5>
                                <h5>
                                    <FontAwesomeIcon
                                        icon={faLink}
                                        className="text-primary me-2"
                                    />
                                    <a href={profile.website} target="_blank" rel="noreferrer">
                                        {profile.website}
                                    </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-4">
                            <h6>Following</h6>
                            <Link
                                to="#"
                                className="text-decoration-none text-muted"
                            >
                                {profile.followingCount}
                            </Link>
                        </div>
                        <div className="col-4">
                            <h6>Followers</h6>
                            <Link
                                to="#"
                                className="text-decoration-none text-muted"
                            >
                                {profile.followersCount}
                            </Link>
                        </div>
                        <div className="col-4">
                            <h6>Date of Birth</h6>
                            <p className="text-muted">
                                {new Date(profile.dateOfBirth).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-11">
                    <div className="d-flex justify-content-between align-items-center mt-3">
                        <h5 className="mb-0">{profile.name}</h5>
                        <button className="btn btn-primary" onClick={handleEditProfile}>Edit Profile</button>

                    </div>
                    <p className="mt-1">{profile.bio}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;