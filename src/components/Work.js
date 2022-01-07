import { useState } from "react";
import Modal from "../components/Modal";
import { siempresano, soleal, pulso, dulce } from "../info/jobs";

const Work = ({ setShowWorks }) => {
    const [section, setSection] = useState(0);

    return (
        <section className="md:grid sm:grid-cols-5">
            <div className="col-span-1 bg-blue text-white text-sm">
                <h6 className="p-8 hover:underline underline-offset-8 cursor-pointer" onClick={() => setSection(0)}>SIEMPRE SANO</h6>
                <h6 className="p-8 hover:underline underline-offset-8 cursor-pointer" onClick={() => setSection(1)}>SOLEAL</h6>
                <h6 className="p-8 hover:underline underline-offset-8 cursor-pointer" onClick={() => setSection(2)}>PULSO FITNESS CLUB</h6>
                <h6 className="p-8 hover:underline underline-offset-8 cursor-pointer" onClick={() => setSection(3)}>DULCE AROMA</h6>
                <div className="flex justify-self-center w-full">
                    <button className="m-4 p-3 w-full outline-none bg-light-blue rounded hover:bg-opacity-80 underline-offset-8 cursor-pointer" onClick={() => setShowWorks(false)}>GO BACK</button>
                </div>
            </div>
            <Tabs section={section}>
                <JobComponent app={siempresano} />
                <JobComponent app={soleal} />
                <JobComponent app={pulso} />
                <JobComponent app={dulce} />
            </Tabs>
        </section>
    )
};

export default Work;

const Tabs = ({ children, section }) => {
    return (
        <div className="col-span-4 bg-gray p-6">
            {children[section]}
        </div>
    )
};

const JobComponent = ({ app }) => {
    const [demo, setDemo] = useState(false);

    return (
        <div className="grid grid-cols-1 text-white md:h-80 sm:place-content-between text-justify font-light md:text-base text-sm">
            <p>{app.text}</p>
            <button className="underline text-left hover:font-semibold md:mt-3 mt-6" onClick={() => setDemo(true)}>Watch demo</button>
            <button className="underline text-left hover:font-semibold" onClick={() => window.open(app.to)}>Take me to the app</button>
            <div className="grid grid-cols-1 md:place-items-start place-items-center mt-6 md:gap-0 gap-6 md:grid-cols-3">
                {
                    app.images.map(i => (
                        <img className="w-5/6 rounded" src={i} />
                    ))
                }
            </div>
            {
                app.message && <p className="text-sm sm:text-left mt-6 text-center">{app.message}</p>
            }
            <Modal
                open={demo}
                setStateFromComponent={setDemo}
            >
                <video className="w-3/4" src={app.src} autoplay controls loop />
            </Modal>
        </div>
    )
}