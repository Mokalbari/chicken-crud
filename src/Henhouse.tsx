import Card from "./Card"
import fakeData from "./lib/fakeData"
// type Props = {}

const Henhouse = () => {
  return (
    <div className="mt-4 bg-slate-200 p-4">
      <h2 className="text-xl font-semibold">Your Henhouse</h2>
      <ul className="mt-4 grid grid-cols-3 gap-4">
        {fakeData.map(item => (
          <li key={item.id}>
            <Card chickenName={item.title} description={item.description} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Henhouse
