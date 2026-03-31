import { Outlet } from "react-router-dom"
import { baseLayaoutPresenter } from "./presenter";

/**
 *  Базовый компонент - контейнер
 *  @returns JSX
 */
export const BaseLayout = (): JSX.Element => {
  const { isLoading } = baseLayaoutPresenter();

  return (
    <div className="base-container">
      {
        isLoading
        ? <>Obtaining an Access Token...</>
        : <Outlet />

      }
    </div>
  )
}
