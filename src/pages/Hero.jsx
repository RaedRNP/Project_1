import Button from "../components/Button";
import Sidebar from "../components/Sidebar";

function Hero() {
  return (
    <>
      <section id="Hero" className="h-screen w-full flex flex-col justify-center items-center text-black text-center md:text-start">
        <h1 className="font-bold text-5xl my-10">
          HELLO, <span className="unique">I'M RAED NOUREDINE</span>
        </h1>
        <p className="text-lg mb-10">
          Frontend Web Developer building the bests Websites you can dream of
        </p>
        <Button title="PROJECTS" />
        <Sidebar />
      </section>
    </>
  );
}

export default Hero;
