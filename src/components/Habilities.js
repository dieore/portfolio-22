import { useState } from "react";
import Work from "./Work";
import Accordion from "./Accordion";

const HabilitiesSection = () => {
    const [showWorks, setShowWorks] = useState(false);

    return (
        <section id="skills" className="p-10 bg-white">
            {
                showWorks
                    ? <Work setShowWorks={setShowWorks} />
                    : <Accordion setShowWorks={setShowWorks} />
            }
        </section>
    )
}

export default HabilitiesSection;