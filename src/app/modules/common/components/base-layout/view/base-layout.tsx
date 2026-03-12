import { Outlet } from "react-router-dom"

export const BaseLayout = (): JSX.Element => {
  return (
    <div className="base-container">
      <Outlet />
    </div>
  )
}
