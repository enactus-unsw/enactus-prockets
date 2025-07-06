import PastEventCards from "components/past-event-cards";

export default function Events() {
  return (
    <div>
      <header className="w-5/6 mx-auto rounded-3xl overflow-hidden text-center mt-10">
        <div className="flex items-center justify-center px-4 pt-20">
          <h1 className="font-bold text-[clamp(24px,6vw,100px)] text-black drop-shadow-lg bg-gradient-to-r from-[#FFDD83] to-[#FFC222] bg-clip-text text-transparent">
            Our Events
          </h1>
        </div>
      </header>
      <section className="pt-6 pb-10 text-center">
        {/* Year */}
        <button className="bg-[#FFDD83] font-semibold text-black mb-8 rounded-full py-3 px-6">
          2025
        </button>
        <div className="flex flex-col justify-center items-center mb-12">
          <PastEventCards />
        </div>
      </section>
    </div>
  )
}