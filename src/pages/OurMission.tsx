import timelineImage from "../components/Images/timeline.png";
import procketsTeam from "../components/Images/procketsTeamPic.png";

export default function OurMission() {
    return (
        <>
            <header className="text-center pt-24 flex flex-col justify-center items-center px-4">
                <h1 className="font-bold text-4xl sm:text-6xl mb-6">Our Mission</h1>
                <p className="max-w-3xl text-base sm:text-lg mb-10">
                    Traditional prosthetic sockets are costly, time-consuming, and made from non-recyclable 
                    materials, making them inaccessible for many. Prockets offers an adjustable, 3D-printed 
                    socket made from recyclable materials like PETG and HDPE, cutting both time and cost. 
                </p>
                <div className="mb-20 flex flex-col justify-center items-center w-full">
                    <img 
                        src={procketsTeam} 
                        alt="Prockets Team Pic 2025" 
                        className="rounded-xl w-full max-w-xl object-cover" 
                    />
                </div>
            </header>

            {/* timeline section */}
            <section className="text-center flex flex-col justify-center items-center bg-[#ece8e7] py-20 px-4">
                <h2 className="font-bold text-4xl mb-8">Our Timeline</h2>
                <img 
                    src={timelineImage} 
                    alt="Timeline Diagram" 
                    className="rounded-xl w-full max-w-3xl object-cover" 
                />
            </section>

            {/* History section */}
            <section className="px-4 md:px-28 py-16 flex flex-col items-center">
                <h2 className="text-center font-bold text-4xl mb-16">Our History</h2>

                {[
                    {
                    year: "2021 - 2022",
                    title: "Ideation & Research",
                    description: `Our project began as a research and development initiative focused on addressing 
                        the challenges faced by the limb-different community. During this phase, we explored 
                        several innovative concepts, including:`,
                    bullets: [
                        "Developing prosthetics using recycled milk bottles and 3D printing technologies",
                        "Investigating sustainable manufacturing methods",
                        "Exploring rural transportation solutions to improve access to medical clinics",
                        "Building the foundation for an online support and engagement community"
                    ]
                    },
                    {
                    year: "2023",
                    title: "Introducing Prockets",
                    description: `In 2023, our focus sharpened on one of the most critical and underserved components of 
                        prosthetic design: the socket. This led to the creation of Prockets, a name derived 
                        from “prosthetic sockets.” Key highlights of this phase included:`,
                    bullets: [
                        "Prototyping sockets using recycled plastic materials, primarily milk bottles",
                        "Reinforcing our commitment to sustainability",
                        "Initiating efforts to develop an online community platform for support and collaboration"
                    ]
                    },
                    {
                    year: "2024",
                    title: "Evolving Our Vision",
                    description: `As we progressed, we recognized the limitations of focusing solely on sockets. 
                        In response, Prockets expanded its scope toward a more holistic, modular prosthetic 
                        system. This broader vision aims to maximize real-world impact, particularly for 
                        underserved populations. Our 2024 milestones include:`,
                    bullets: [
                        "Launching a new social media presence to better engage with the community",
                        "Establishing partnerships, including a key collaboration with Amputees NSW",
                        "Advancing the design and 3D printing of functional prototypes"
                    ]
                    },
                    {
                    year: "2025 & Beyond",
                    title: "Looking Ahead",
                    description: `Our future efforts are centered on expanding accessibility and affordability of 
                        prosthetic solutions, especially for rural and remote communities. This includes:`,
                    bullets: [
                        "Consulting with manufacturing companies to scale production",
                        "Exploring mobile prosthetic services to reach underserved regions",
                        "Continuing to grow our online community platform for education, support, and connection",
                        "We remain committed to human-centered design, sustainability, and social impact at every step of our journey."
                    ]
                    }
                ].map((entry, i) => (
                    <div 
                        key={i} 
                        className="mb-20 flex flex-col md:flex-row w-full max-w-5xl"
                    >
                        {/* Year label */}
                        <div className="flex justify-center items-center md:w-24 mb-4 md:mb-0">
                            <h4 className="font-semibold text-2xl md:text-3xl md:-rotate-90 text-[#fec024] whitespace-nowrap">
                                {entry.year}
                            </h4>
                        </div>

                        {/* Content */}
                        <div className="flex-1 md:pl-6">
                            {entry.title && (
                                <h4 className="font-semibold text-xl mb-4">
                                    {entry.title}
                                </h4>
                            )}
                            <p className="mb-3">{entry.description}</p>
                            <ul className="list-disc pl-6 space-y-2">
                                {entry.bullets.map((point, idx) => (
                                    <li key={idx}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}
