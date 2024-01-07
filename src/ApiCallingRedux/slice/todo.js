import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchTodos=createAsyncThunk('fetchTodos',async()=>{
    const response= await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json(); 
})
export const todoSlice= createSlice({
    name:'todo',
    initialState:{
        isLoading:false,
        data:null, 
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchTodos.pending,(state,action)=>{
            state.isLoading =true;
            state.isError=false;

        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log('ERROR Hai bhai', action.error);
            state.isLoading = false;
            state.isError = true;
        });

},

});
export default todoSlice.reducer;
// export default todoSlice;
