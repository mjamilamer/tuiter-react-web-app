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