import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstName: 'Jane',
    lastName: 'Doe',
    handle: '@jane.doe',
    profilePicture: 'profile_placeholder_image.jpg',
    bannerPicture: 'starship_4k.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus, felis vel placerat hendrerit, lacus elit congue ipsum, eu ornare elit elit id nisi. Fusce faucibus libero non dui iaculis tincidunt. Sed faucibus sit amet nisl at accumsan. Nullam vehicula vulputate nunc eu pulvinar.',
    location: 'San Francisco, CA',
    dateOfBirth: 'January 1, 1990',
    dateJoined: 'March 1, 2021',
    followingCount: 234,
    followersCount: 10000
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfile(state, action) {
            const {
                userName,
                handle,
                avatar,
                bio,
                location,
                website,
                joined,
                followers,
                following,
            } = action.payload;
            state.userName = userName;
            state.handle = handle;
            state.avatar = avatar;
            state.bio = bio;
            state.location = location;
            state.website = website;
            state.joined = joined;
            state.followers = followers;
            state.following = following;
        },
    },
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
