import { useState } from "react";
import { siempresano, soleal, pulso, dulce } from "../info/jobs";
import Job from "./Job";

const Tabs = ({ children, section }) => {
    return (
        <div className="col-span-4 bg-gray p-6">
            {children[section]}
        </div>
    )
};

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
                <Job app={siempresano} />
                <Job app={soleal} />
                <Job app={pulso} />
                <Job app={dulce} />
            </Tabs>
        </section>
    )
};

export default Work;