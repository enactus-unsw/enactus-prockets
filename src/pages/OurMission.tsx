import timelineImage from "../components/Images/timeline.png";
import procketsTeam from "../components/Images/procketsTeamPic.png";

export default function OurMission() {
    return (
        <>
            <header className="text-center pt-24 md:pb-14">
                <h1 className="font-bold text-4xl sm:text-6xl">Our Mission</h1>
            </header>
            <div className="flex flex-col justify-center items-center mb-20">
                <img src={procketsTeam} alt="Prockets Team Pic 2025" className="rounded-xl w-3/5"/>
            </div>
            {/* timeline section */}
            <section className="text-center flex flex-col justify-center items-center bg-[#ece8e7] py-20">
                <h2 className="font-bold text-4xl mb-8">Our Timeline</h2>
                <img src={timelineImage} alt="Timeline Diagram" className="rounded-xl w-3/5"/>
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
                    <div key={i} className="mb-20 flex w-full max-w-5xl">
                    {/* Year label */}
                    <div className="w-24 flex justify-center items-center">
                        <h4 className="font-semibold text-3xl -rotate-90 whitespace-nowrap">{entry.year}</h4>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pl-6">
                        {entry.title && <h4 className="font-semibold text-xl mb-4">{entry.title}</h4>}
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