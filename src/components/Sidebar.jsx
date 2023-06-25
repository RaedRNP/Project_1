import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col justify-evenly w-24 h-80 bg-transparent border-solid border-y-2 border-r-2 border-white absolute left-0 rounded-r-xl">
            <a href="#"><div className="absolute left-1/2 -mt-4"><IoLogoGithub className="relative -left-1/2 text-4xl transition-[2s] hover:text-5xl" /></div></a>
            <a href="#"><div className="absolute left-1/2 -mt-4"><IoLogoLinkedin className="relative -left-1/2 text-4xl transition-[2s] hover:text-5xl" /></div></a>
            <a href="#"><div className="absolute left-1/2 -mt-4"><IoLogoTwitter className="relative -left-1/2 text-4xl transition-[2s] hover:text-5xl" /></div></a>
        </div>
    )
}

export default Sidebar