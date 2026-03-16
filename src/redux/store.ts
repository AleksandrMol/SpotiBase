import { configureStore } from '@reduxjs/toolkit'
import { galleryReducer } from './modules/gallery/slices/gallery-slice'

const rootReducer = {
  galleryList: galleryReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
