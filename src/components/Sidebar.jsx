import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

function Sidebar() {
    return (
        <div className="flex flex-col items-center justify-evenly w-24 h-80 bg-transparent border-solid border-y-2 border-r-2 border-white absolute left-0 top-auto rounded-r-xl">
            <a href="#"><IoLogoGithub className="text-4xl transition-[2s] hover:text-5xl" /></a>
            <a href="#"><IoLogoLinkedin className="text-4xl transition-[2s] hover:text-5xl" /></a>
            <a href="#"><IoLogoTwitter className="text-4xl transition-[2s] hover:text-5xl" /></a>
        </div>
    )
}

export default Sidebar