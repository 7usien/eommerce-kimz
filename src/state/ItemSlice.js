import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initalState = {
  loading: false,
  error: null,
  records: [],
};

export const filterItems = createAsyncThunk(
  'items/filterItems',
  async (prefix, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;

    try {
      const res = await fetch(
        `http://localhost:3000/items?cat_prefix=${prefix}`
      );
      const data = await res.json();

      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const itemSlice = createSlice({
  name: 'items',
  initialState: initalState,

  extraReducers: (builder) => {
    builder.addCase(filterItems.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(filterItems.fulfilled, (state, action) => {
      state.loading = false;

      state.records = action.payload;
    });

    builder.addCase(filterItems.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default itemSlice.reducer;
