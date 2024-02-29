import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchPosts = createAsyncThunk("posts/fecthPosts" , async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data ;
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        error: null,
        posts: []
    },
    extraReducers:(builder) =>{
        builder.addCase(fetchPosts.pending, (state)=>{
            state.isLoading = true
        });
        builder.addCase(fetchPosts.fulfilled, (state,action)=>{
            state.isLoading = false,
            state.error = false,
            state.posts = action.payload
        });
        builder.addCase(fetchPosts.rejected, (state,action)=>{
            state.isLoading = false,
            state.error = action.error.message
        });
    }
})



export default postsSlice.reducer;