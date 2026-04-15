import './index.scss'

export const LoaderComponent = (): JSX.Element => {
  return (
    <div className="loader">
      <div className="spinner" />
      <div className="loader-text">Initializing access token...</div>
    </div>
  )
}
