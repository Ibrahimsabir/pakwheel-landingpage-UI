import Image from "next/image";

const Imagelogo=()=>{
    return(
        <div className="flex justify-start  w-[15%] mx-20 ">
        <Image
          src="/images/new-pw-logo-white.svg"
          alt="PakWheels logo"
          width={40}
          height={40}
          layout="responsive"
          className=" w-10 h-10"
        />
      </div>
    )
}
export default Imagelogo