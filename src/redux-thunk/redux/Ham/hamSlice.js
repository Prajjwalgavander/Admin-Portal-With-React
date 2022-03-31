import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  openHam: true
}

const hamSlice = createSlice({
  name: 'hamSlice',
  initialState: defaultState,
  reducers: {
    handleDrawerToggle: (state) => {
      return {
        openHam: !state.openHam
      }
    },
    handleDrawerHamValue: (state, { payload }) => {
      return {
        openHam: payload
      }
    }
  }
})

export const { handleDrawerToggle, handleDrawerHamValue } = hamSlice.actions

export default hamSlice.reducer
