import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

function Sidebar() {
    return (
        <div className="hidden sm:flex flex-col justify-evenly w-24 h-80 bg-gradient-to-br from-purple-950 from-5% via-purple-900 to-purple-800 border-y-2 border-r-2 border-none absolute left-0 rounded-r-xl text-white">
            <a href="#"><div className="absolute left-1/2 -mt-4"><IoLogoGithub className="relative -left-1/2 text-4xl transition-[2s] hover:text-5xl" /></div></a>
            <a href="#"><div className="absolute left-1/2 -mt-4"><IoLogoLinkedin className="relative -left-1/2 text-4xl transition-[2s] hover:text-5xl" /></div></a>
            <a href="#"><div className="absolute left-1/2 -mt-4"><IoLogoTwitter className="relative -left-1/2 text-4xl transition-[2s] hover:text-5xl" /></div></a>
        </div>
    )
}

export default Sidebar