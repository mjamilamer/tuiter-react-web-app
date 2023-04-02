import {createAsyncThunk} from '@reduxjs/toolkit';
import * as service from "./tuits-service"
import async from "async";


export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit', async (tuitId) => {
        await service.deleteTuit(tuitId)
        return tuitId
    }
)

export const creatTuitThunk = createAsyncThunk(
    'tuits/createTuit', async (tuit) => {
        const newTuit = await service.createTuit(tuit)
        return newTuit
    }
)

export const updateTuitThunk =
    createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )

