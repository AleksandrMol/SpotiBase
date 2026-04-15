import { createBrowserRouter, Navigate } from "react-router-dom";
import { BaseLayout } from "./modules/common/components/base-layout/view/base-layout";
import { RoutesEnum } from "./enums/routes-enum";
import { GalleryPage } from "./modules/gallery/view/gallery-component";
import { SearchPage } from "./modules/search/view/search";

export const router = createBrowserRouter([
  {
    path: RoutesEnum.EMPTY,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={ RoutesEnum.SEARCH } replace/>
      },
       {
        path: RoutesEnum.SEARCH,
        element: <SearchPage />
      },
      {
        path: RoutesEnum.GALLERY,
        element: <GalleryPage />
      },
      {
        path: RoutesEnum.ALBUMS,
        element: <>ALBUMS</>
      },
      {
        path: RoutesEnum.ARTISTS,
        element: <>ARTISTS</>
      }
    ],
  },
]);
