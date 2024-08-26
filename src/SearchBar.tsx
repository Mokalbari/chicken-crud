import SVGBell from "./svg/SVGBell"
import SVGLoop from "./svg/SVGLoop"
import chickenLord from "/public/chickenlord.webp"

// type Props = {}

const SearchBar = () => {
  return (
    <div className="flex items-center bg-white p-4">
      <div className="flex flex-1 items-center gap-4">
        <SVGLoop size="2rem" />
        <input type="text" className="flex-1 rounded-xl bg-slate-200 p-1" />
      </div>
      <div className="ml-64 flex items-center gap-4">
        <SVGBell size="2rem" />
        <img
          className="w-16 rounded-full"
          src={chickenLord}
          alt="Chicken Lord"
        />
        <span className="font-bold">Chicken Lord</span>
      </div>
    </div>
  )
}

export default SearchBar
