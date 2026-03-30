import { configureStore } from '@reduxjs/toolkit'
import { galleryReducer } from './modules/gallery/slices/gallery-slice'
import { configReducer } from './modules/configs/slices/config-slice'
import { apiReducer, baseApi } from './api/base/base-api'
import { ReducerNamesEnum } from '@app/enums/reducer-names-enum'

export const store = configureStore({
  reducer: {
    [ReducerNamesEnum.APP_CONFIG]: configReducer,
    [ReducerNamesEnum.GALLERY_LIST]: galleryReducer,
    [ReducerNamesEnum.API]: apiReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(baseApi.middleware)
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
