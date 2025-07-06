
export default function OurProducts() {
    return (
        <div className="">
            <header className="text-center pt-28 flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl sm:text-6xl mb-10">Our Products</h1>
            </header>

            <section className="max-w-3xl w-full px-4 my-8 mx-auto flex flex-col items-center text-center">
                <h2 className="font-bold text-2xl mb-4">What Sets Us Apart</h2>
                <p className="mb-8">
                    Enactus UNSW’s prosthetics mission is different in its focus on creating a modular and
                    accessible upper limb prosthetic, which sets it apart from traditional routes of 
                    innovation. Our modular design approach sets us apart from traditional prosthetics, 
                    which are typically custom-made, expensive, and non-modular, meaning each limb has to 
                    be built from scratch to fit one user. However, our vision is to create an interchangeable, 
                    modular socket component allowing for faster adjustments for individual needs. 
                </p>
                <p>
                    Another key feature that sets Enactus apart is our design blueprint for a modular prosthetic socket, 
                    which is specifically engineered to be 3D-printable. This allows for rapid local fabrication for 
                    rural and low-socioeconomic communities, as our modular prosthetic socket design is optimised for 
                    standard desktop 3D printers, enabling on-site production. This reduces logistical barriers posed by 
                    centralised manufacturing or overseas shipping, thus reducing extensive waiting periods whilst 
                    increasing accessibility. 
                </p>
            </section>
        </div>
    )
}
