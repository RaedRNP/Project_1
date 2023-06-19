import Button from "../components/Button"

function Hero(){
    return (
        <section className="h-screen w-full bg-gradient-to-br from-[#0F2027] from-5% via-[#254651] to-[#216e90] flex flex-col justify-center items-center text-white">
            <h1 className="font-bold text-5xl my-10">HELLO, I'M RAED NOUREDINE</h1>
            <p className="text-lg mb-10">Frontend Web Developer building the bests Websites you can dream of</p>
            <Button title="PROJECTS"/>
        </section>
    )
}

export default Hero