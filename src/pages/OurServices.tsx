export default function OurServices() {
    return (
        <div className="bg-[#ece8e7] min-h-screen">
            <header className="text-center pt-28 flex flex-col justify-center items-center">
                <h1 className="font-bold text-4xl sm:text-6xl mb-10">Our Services</h1>
            </header>

            <section className="max-w-3xl w-full px-4 my-8 mx-auto flex flex-col items-center text-center">
                <div className="bg-white rounded-xl shadow-lg p-10">
                    <h2 className="font-bold text-2xl mb-4">Forum Feedback</h2>
                    <p className="mb-8">
                        More than just a product, we’re creating a supportive community where people with limb 
                        differences can share their experiences and provide valuable feedback. While we may not 
                        fully understand every individual’s journey, we believe that education, empathy, and 
                        collaboration are essential to developing user-informed, inclusive designs.
                    </p>
                </div>
            </section>
        </div>
    )
}
