import { Outlet } from "react-router-dom"

/**
 *  Базовый компонент - контейнер
 *  @return JSX
 */
export const BaseLayout = (): JSX.Element => {
  return (
    <div className="base-container">
      <Outlet />
    </div>
  )
}
