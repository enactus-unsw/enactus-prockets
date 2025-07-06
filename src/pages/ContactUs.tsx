const enactusWebsite = "https://enactusunsw.org/";
const emailAddress = "prockets@enactusunsw.org";
const procketsInstagram = "https://www.instagram.com/prockets.au?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

export default function ContactUs() {
    return (
        <>
            <header className="text-center pt-28 flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl sm:text-6xl mb-10">Contact Us</h1>
            </header>

            <section className="max-w-3xl w-full px-4 my-8 mx-auto flex flex-col items-center text-center">
                <h2 className="font-bold text-xl mb-4">Enactus UNSW Website</h2>
                <button className="bg-[#FFDD83] font-semibold text-black mb-10 rounded-full py-3 px-6">
                    <a href={enactusWebsite} target="_blank">
                        Take Me There
                    </a>
                </button>

                <h2 className="font-bold text-xl mb-4">Email</h2>
                <button className="bg-[#FFDD83] font-semibold text-black mb-10 rounded-full py-3 px-6">
                    <a href={`mailto:${emailAddress}`}>
                        {emailAddress}
                    </a>
                </button>
                
                <h2 className="font-bold text-xl mb-4">Instagram</h2>
                <button className="bg-[#FFDD83] font-semibold text-black mb-10 rounded-full py-3 px-6">
                    <a href={procketsInstagram} target="_blank">
                        @prockets.au
                    </a>
                </button>
            </section>
        </>
    )
}