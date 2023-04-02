import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstName: 'Jane',
    lastName: 'Doe',
    handle: 'jane.doe',
    profilePicture: 'profile_placeholder_image.jpg',
    bannerPicture: 'starship_4k.jpg',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus, felis vel placerat hendrerit, lacus elit congue ipsum, eu ornare elit elit id nisi. Fusce faucibus libero non dui iaculis tincidunt. Sed faucibus sit amet nisl at accumsan. Nullam vehicula vulputate nunc eu pulvinar.',
    location: 'San Francisco, CA',
    website: 'https://jane.doe',
    dateOfBirth: 'January 1, 1990',
    dateJoined: 'March 1, 2021',
    followingCount: 234,
    followersCount: 10000,
    isEditing: false
};

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateProfile(state, action) {
            return {...state, ...action.payload, isEditing: false};
        },
        startEditing(state) {
            state.isEditing = true;
        },
        stopEditing(state) {
            state.isEditing = false;
        }
    }
});

export const {updateProfile, startEditing, stopEditing} = profileSlice.actions;
export default profileSlice.reducer;
