import { createBrowserRouter, Navigate } from "react-router-dom";
import { BaseLayout } from "./modules/common/components/base-layout/view/base-layout";
import { RoutesEnum } from "./enums/routes-enum";
import { GalleryComponent } from "./modules/gallery/view/gallery-component";

export const router = createBrowserRouter([
  {
    path: RoutesEnum.EMPTY,
    element: <BaseLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={ RoutesEnum.GALLERY } replace/>
      },
      {
        path: RoutesEnum.GALLERY,
        element: <GalleryComponent />
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
