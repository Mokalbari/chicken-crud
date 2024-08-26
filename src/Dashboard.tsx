// type Props = {}

const Dashboard = () => {
  const list = ["Home", "Create", "Update", "Delete"]
  return (
    <div className="bg-blue-500 text-white">
      <h1 className="pt-4 text-2xl font-extrabold">Chicken Manager</h1>
      <ul className="ml-4 mt-4 pb-4 text-xl font-bold">
        {list.map(item => (
          <li className="mt-2" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dashboard
