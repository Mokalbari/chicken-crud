import chickenLord from "/public/chickenlord.webp"

// type Props = {}

const Profile = () => {
  return (
    <div className="flex items-center gap-4 bg-white p-4">
      <img className="w-24 rounded-full" src={chickenLord} alt="Chicken Lord" />
      <div className="flex flex-col">
        <span className="font-bold">Hi there,</span>
        <span className="text-xl font-extrabold">
          Chicken Lord ! (@pfoulay)
        </span>
      </div>
    </div>
  )
}

export default Profile
