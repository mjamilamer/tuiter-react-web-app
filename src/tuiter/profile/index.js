import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {faCalendarAlt, faLink, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {updateProfile, startEditing, stopEditing} from "./profile-reducer";
import EditProfile from "../editProfile/EditProfile";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);

    const handleEditProfile = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };

    const handleUpdateProfile = (newProfile) => {
        dispatch(updateProfile(newProfile));
        setIsEditing(false);
    };

    return (
        <div className='container-fluid mt-5'>
            <div className='row'>
                <div>
                    <img className='w-100' src={`../tuiter/images/${profile.bannerPicture}`}
                         alt='Banner'/>
                </div>
            </div>
            <div className='row '>
                <div className='col-2'>
                    <div className='d-flex justify-content-center mb-3'>
                        <img src={`../tuiter/images/${profile.profilePicture} `}
                             alt={profile.username} className='rounded-circle w-100'/>
                    </div>
                </div>
                <div className='col-10'>
                    <div className='row'>
                        <div className='col-8'>
                            <h1 className='profile-name'>{profile.firstName} {profile.lastName}</h1>
                            <p className='profile-username'>@{profile.handle}</p>
                        </div>
                        <div className='col-4'>
                            <div className='d-flex justify-content-end'>
                                <button className='btn btn-outline-primary btn-sm'
                                        onClick={handleEditProfile}>Edit Profile
                                </button>
                            </div>
                        </div>
                    </div>
                    {isEditing ? (
                        <EditProfile profile={profile} onSave={handleUpdateProfile}
                                     onCancel={handleCancel}/>
                    ) : (
                        <div>
                            <p className='profile-bio'>{profile.bio}</p>
                            <div className='profile-details'>
                                <p className='mb-0'><FontAwesomeIcon
                                    icon={faMapMarkerAlt}/> {profile.location}</p>
                                <p className='mb-0'><FontAwesomeIcon icon={faLink}/> <a
                                    href={`http://www.${profile.website}`}>{profile.website}</a></p>
                                <p className='mb-0'><FontAwesomeIcon
                                    icon={faCalendarAlt}/> {profile.dateOfBirth}</p>
                            </div>
                            <div className='profile-stats'>
                                <p className='mb-0'><span
                                    className='font-weight-bold'>{profile.dateJoined}</span> Date
                                    Joined
                                </p>
                                <p className='mb-0'><span
                                    className='font-weight-bold'>{profile.followersCount}</span> Followers
                                </p>
                                <p className='mb-0'><span
                                    className='font-weight-bold'>{profile.followingCount}</span> Following
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProfileComponent;
