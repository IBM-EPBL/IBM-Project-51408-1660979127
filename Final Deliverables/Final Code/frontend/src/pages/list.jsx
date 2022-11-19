import "./list.scss"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
      </div>
    </div>
  )
}

export default List