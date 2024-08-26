import SVGBell from "./svg/SVGBell"
import SVGLoop from "./svg/SVGLoop"
import chickenLord from "/public/chickenlord.webp"

// type Props = {}

const SearchBar = () => {
  return (
    <div className="flex items-center">
      <div className="flex items-center gap-4">
        <SVGLoop size="2rem" />
        <form action="#" method="get">
          <input type="text" className="rounded-xl bg-slate-200" />
        </form>
      </div>
      <div className="ml-auto flex items-center gap-8">
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
