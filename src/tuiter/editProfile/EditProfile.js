import {Link} from 'react-router-dom';
import {useState} from 'react';

function EditProfile({profile, onSave}) {
    const [name, setName] = useState(profile.firstName + ' ' + profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dob, setDob] = useState(profile.dateOfBirth);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({
            name,
            bio,
            location,
            website,
            dob,
        });
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
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

    return (
        <div className="container">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
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
                <button type="submit" className="btn btn-primary mr-2">
                    Save
                </button>
                <Link to="/tuiter/profile" className="btn btn-secondary">Cancel</Link>
            </form>
        </div>
    );
}

export default EditProfile;
