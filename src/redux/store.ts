import { configureStore } from '@reduxjs/toolkit'
import { galleryReducer } from './modules/gallery/slices/gallery-slice'
import { configReducer } from './modules/configs/slices/config-slice'

const rootReducer = {
  appConfig: configReducer,
  galleryList: galleryReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
