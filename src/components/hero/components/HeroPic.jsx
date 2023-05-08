import Image from "next/image"
import heroPng from "../../../assets/hero.png"

export default function  HeroPic() {
  return (
    <div className="flex w-1/2 justify-center items-center  lg:order-1 xl:order-1  ">
       <Image
      src={heroPng}
      width={340}
      height={340}
      alt="Picture of the author"
    />
    </div>
   
  )
}
