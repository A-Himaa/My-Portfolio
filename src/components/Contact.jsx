

export default function Contact() {
    return(
        <section className="bg-bgColor py-20">
            <h3 className="font-mono text-base text-textAccent text-center mb-0">
                    CONTACT
                </h3>
                <h2 className="font-bold text-3xl md:text-5xl text-textColor pb-2 leading-tight text-center">
                    Connect With Me
                </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
                <div>
                    <h2 className="font-bold text-2xl md:text-3xl text-textColor pb-2 leading-tight text-center">Connect With Me</h2>
                    <p className="text-base text-textColor tracking-wide">I aim to work in a dynamic engineering environment where I can solve meaningful 
                        problems, collaborate with talented teams, and continuously refine my craft.</p>
                </div>

                <div className="space-y-3">
                    <span className="text-base text-textColor tracking-wide">Name :</span>
                    <input type="text" className="w-full h-8 bg-textColor rounded-lg" />
                    <span className="text-base text-textColor tracking-wide">Name :</span>
                    <input type="text" className="w-full h-8 bg-textColor rounded-lg" />
                    <span className="text-base text-textColor tracking-wide">Name :</span>
                    <input type="text" className="w-full h-8 bg-textColor rounded-lg" />
                    <span className="text-base text-textColor tracking-wide">Name :</span>
                    <input type="text" className="w-full h-8 bg-textColor rounded-lg" />
                </div>
            </div>

        </section>
    )
}