

export default function Div({contant,className}) {
  return (
    <div className={` text-light flex justify-center items-center rounded-lg  w-28 h-8  bg-dark border-[0.2px] hover:border-0 border-black ${className}`}>{contant}</div>
  )
}
