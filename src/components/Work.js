import { useState } from "react";
import { Fade } from "react-reveal";
import { siempresano, soleal, pulso, dulce } from "../info/jobs";
import Job from "./Job";

const Tabs = ({ children, section, setShowWorks }) => {
    return (
        <div className="col-span-4 bg-gray p-6 z-50">
            <Fade>
                {children[section]}
                <button className="md:hidden text-sm mt-4 p-2 w-full outline-none bg-light-blue text-white rounded hover:bg-opacity-80 underline-offset-8 cursor-pointer" onClick={() => setShowWorks(false)}>GO BACK</button>
            </Fade>
        </div>
    )
};

const Work = ({ setShowWorks }) => {
    const [section, setSection] = useState(0);

    return (
        <section className="md:grid sm:grid-cols-5">
            <div className="col-span-1 bg-blue text-white text-sm md:place-items-start grid place-items-center">
                <select onChange={(e) => setSection(e.target.value)} className="outline-none md:hidden w-5/6 p-2 m-4 rounded bg-blue font-bold">
                    <option className="bg-light-gray-200 text-blue" value={0}>SIEMPRE SANO</option>
                    <option className="bg-light-gray-200 text-blue" value={1}>SOLEAL</option>
                    <option className="bg-light-gray-200 text-blue" value={2}>PULSO FITNESS CLUB</option>
                    <option className="bg-light-gray-200 text-blue" value={3}>DULCE AROMA</option>
                </select>
                <h6 className="p-8 hover:underline underline-offset-8 cursor-pointer hover:font-semibold hidden md:flex" onClick={() => setSection(0)}>SIEMPRE SANO</h6>
                <h6 className="p-8 hover:underline underline-offset-8 cursor-pointer hover:font-semibold hidden md:flex" onClick={() => setSection(1)}>SOLEAL</h6>
                <h6 className="p-8 hover:underline underline-offset-8 cursor-pointer hover:font-semibold hidden md:flex" onClick={() => setSection(2)}>PULSO FITNESS CLUB</h6>
                <h6 className="p-8 hover:underline underline-offset-8 cursor-pointer hover:font-semibold hidden md:flex" onClick={() => setSection(3)}>DULCE AROMA</h6>
                <div className="md:flex justify-self-center w-full hidden">
                    <button className="m-4 p-2 w-full outline-none bg-light-blue rounded hover:bg-opacity-80 underline-offset-8 cursor-pointer" onClick={() => setShowWorks(false)}>GO BACK</button>
                </div>
            </div>
            <Tabs setShowWorks={setShowWorks} section={section}>
                <Job app={siempresano} />
                <Job app={soleal} />
                <Job app={pulso} />
                <Job app={dulce} />
            </Tabs>
        </section>
    )
};

export default Work;