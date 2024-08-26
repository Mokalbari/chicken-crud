type Props = { size: string }

const SVGEdit = ({ size = "800px" }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-11 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>pencil</title>
      <defs />
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Icon-Set"
          transform="translate(-579.000000, -99.000000)"
          fill="#000000"
        >
          <path
            d="M587,106 L581,106 L581,102 C580.969,101.012 581.021,100.968 582,101 L586,101 C586.98,101.007 587.004,100.967 587,102 L587,106 L587,106 Z M587,121 C584.946,120.999 581.582,121 581,121 L581,108 L587,108 L587,121 L587,121 Z M584,128.257 L581,123 L587,123 L584,128.257 L584,128.257 Z M587,99 L581,99 C579.79,99 579,99.779 579,101 L579,123.213 L583,130.275 C583.604,131.206 584.396,131.206 585,130.275 L589,123.213 L589,101 C589,99.779 588.21,99.001 587,99 L587,99 Z"
            id="pencil"
          />
        </g>
      </g>
    </svg>
  )
}

export default SVGEdit
