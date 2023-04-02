import React, {useState} from 'react';
import {Link} from 'react-router-dom';


function EditProfile({profile, onSave, onCancel}) {
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [handle, setHandle] = useState(profile.handle);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dob, setDob] = useState(profile.dateOfBirth ? new Date(profile.dateOfBirth).toISOString().substring(0, 10) : '');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({
            firstName,
            lastName,
            handle,
            bio,
            location,
            website,
            dob,
        });
    };

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleHandleChange = (event) => {
        setHandle(event.target.value);
    };

    const handleBioChange = (event) => {
        setBio(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleWebsiteChange = (event) => {
        setWebsite(event.target.value);
    };

    const handleDobChange = (event) => {
        setDob(event.target.value);
    };

    const handleCancel = (event) => {
        onCancel();
    }
    return (
        <div className="container">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={lastName}
                        onChange={handleLastNameChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="handle">Handle</label>
                    <input
                        type="text"
                        className="form-control"
                        id="handle"
                        value={handle}
                        onChange={handleHandleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="bio">Bio</label>
                    <textarea
                        className="form-control"
                        id="bio"
                        rows="3"
                        value={bio}
                        onChange={handleBioChange}
                    ></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        value={location}
                        onChange={handleLocationChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="website">Website</label>
                    <input
                        type="text"
                        className="form-control"
                        id="website"
                        value={website}
                        onChange={handleWebsiteChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                        type="date"
                        className="form-control"
                        id="dob"
                        value={dob}
                        onChange={handleDobChange}
                    />
                </div>
            </form>
            <button type="submit" form="myForm" className="btn btn-primary mr-2"
                    onClick={handleSubmit}>
                Save
            </button>
            <button onClick={handleCancel} className="btn btn-secondary">Cancel</button>


        </div>
    );
}

export default EditProfile;

