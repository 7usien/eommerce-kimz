import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initalState = {
  loading: false,
  error: null,
  records: [],
};

export const getcategories = createAsyncThunk(
  'categories/getcategories',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('http://localhost:3000/category');
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const categorySlice = createSlice({
  name: 'categories',
  initialState: initalState,

  extraReducers: (builder) => {
    builder.addCase(getcategories.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(getcategories.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });

    builder.addCase(getcategories.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default categorySlice.reducer;
