import SVGDelete from "./svg/SVGDelete"
import SVGEdit from "./svg/SVGEdit"

type Props = {
  chickenName: string
  description: string
}

const Card = ({ chickenName, description }: Props) => {
  return (
    <article className="max-w-prose rounded-lg border-l-8 border-l-blue-300 bg-white p-4 shadow-inner">
      <h3 className="font-semibold">{chickenName}</h3>
      <p className="text-black/75">{description}</p>
      <div className="mt-4 flex justify-end gap-4">
        <SVGEdit size="1.5rem" />
        <SVGDelete size="1.5rem" />
      </div>
    </article>
  )
}

export default Card
