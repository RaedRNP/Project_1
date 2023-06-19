import Button from "../components/Button"
import Sidebar from "../components/Sidebar"

function Hero(){
    return (
        <section className="h-screen w-full bg-gradient-to-br from-[#0f0c29] from-5% via-[#302b63] to-[#24243e] flex flex-col justify-center items-center text-white">
            <h1 className="font-bold text-5xl my-10">HELLO, I'M RAED NOUREDINE</h1>
            <p className="text-lg mb-10">Frontend Web Developer building the bests Websites you can dream of</p>
            <Button title="PROJECTS"/>
            <Sidebar />
        </section>
    )
}

export default Hero