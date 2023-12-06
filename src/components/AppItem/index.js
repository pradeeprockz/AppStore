// Write your code here
import './index.css'

const AppItem = ({app}) => (
  <li className="app-item">
    <img src={app.imageUrl} alt={app.appName} />
    <p>{app.appName}</p>
  </li>
)

export default AppItem
