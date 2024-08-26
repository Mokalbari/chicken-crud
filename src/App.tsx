import Dashboard from "./Dashboard"
import Henhouse from "./Henhouse"
import Profile from "./Profile"
import SearchBar from "./SearchBar"

const App = () => {
  return (
    <div className="grid grid-cols-[250px_1fr] bg-slate-200">
      <Dashboard className="" />
      <div>
        <SearchBar />
        <Profile />
        <Henhouse />
      </div>
    </div>
  )
}

export default App
