import limbs4Life from "../components/Images/Limbs4Life.png";
import amputeesNSW from "../components/Images/AmputeesNSW.png";
import oapl from "../components/Images/oapl.png";

export default function Support() {
    return (
        <>
            <header className="text-center pt-28 flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl sm:text-6xl mb-20">Support</h1>
            </header>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4 pb-16">
                <img src={limbs4Life} alt="Limbs4Life Logo" className="max-w-[250px] w-full h-auto"/>
                <img src={amputeesNSW} alt="Amputees NSW Logo" className="max-w-[250px] w-full h-auto"/>
                <img src={oapl} alt="OAPL Logo" className="max-w-[250px] w-full h-auto"/>
            </div>
        </>
    )
}
