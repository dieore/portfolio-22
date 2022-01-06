import { useState } from "react";
import Work from "./Work";
import Accordion from "./Accordion";

const HabilitiesSection = () => {
    const [showWorks, setShowWorks] = useState(false);

    return (
        <>
            {
                showWorks
                    ? <Work />
                    : <Accordion setShowWorks={setShowWorks}/>
            }
        </>
    )
}

export default HabilitiesSection;