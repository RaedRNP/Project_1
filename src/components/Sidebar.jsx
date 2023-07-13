import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

function Sidebar() {
    return (
        <div className="bottom-0 w-full h-24 items-center sm:bottom-auto flex sm:flex-col justify-evenly sm:w-24 sm:h-80 bg-gradient-to-br from-purple-950 from-5% via-purple-900 to-purple-800 sm:border-y-2 sm:border-r-2 border-none absolute sm:left-0 sm:rounded-r-xl text-white">
            <a href="https://github.com/RaedRNP"><div className="sm:absolute sm:left-1/2 sm:-mt-4"><IoLogoGithub className="relative sm:-left-1/2 text-4xl transition-[2s] hover:text-5xl" /></div></a>
            <a href="https://www.linkedin.com/in/raed-nouredine-a648431a2/"><div className="sm:absolute sm:left-1/2 sm:-mt-4"><IoLogoLinkedin className="relative sm:-left-1/2 text-4xl transition-[2s] hover:text-5xl" /></div></a>
            <a href="https://twitter.com/RaedRNP"><div className="sm:absolute sm:left-1/2 sm:-mt-4"><IoLogoTwitter className="relative sm:-left-1/2 text-4xl transition-[2s] hover:text-5xl" /></div></a>
        </div>
    )
}

export default Sidebar