import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  page: number;
  limit: number;
  totalPages: number | null;
  currentPage: number | null;
  sortBy: string;
  sortOrder: "asc" | "desc";
  search: string;
  authors: string[];
  categories: string[];
}

interface BlogState {
  uid: string;
  toggleBlogFormReset: boolean;
  filtersData: FiltersState;
}

const initialFilters: FiltersState = {
  page: 1,
  limit: 12,
  totalPages: null,
  currentPage: null,
  sortBy: "",
  sortOrder: "desc",
  search: "",
  authors: [],
  categories: [],
};

const initialState: BlogState = {
  uid: "",
  toggleBlogFormReset: false,
  filtersData: initialFilters,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setUid: (state, action: PayloadAction<string>) => {
      state.uid = action.payload;
    },

    setBlogFormReset: (state) => {
      state.toggleBlogFormReset = !state.toggleBlogFormReset;
    },

    setFilters: (state, action: PayloadAction<FiltersState>) => {
      state.filtersData = action.payload;
    },

    updateFilter: <K extends keyof FiltersState>(
      state: BlogState,
      action: PayloadAction<{ key: K; value: FiltersState[K] }>,
    ) => {
      const { key, value } = action.payload;
      state.filtersData[key] = value;
    },

     resetFilters: (state) => {
      state.filtersData = initialFilters;
    },
  },
});

export const { setUid, updateFilter, setFilters, resetFilters, setBlogFormReset } = blogSlice.actions;
export default blogSlice.reducer;
