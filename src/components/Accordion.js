import { useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const AccordionComponent = ({ setShowWorks }) => {
    const [projects, setProjects] = useState(false);

    return (
        <section id="skills" className="grid grid-cols-1 gap-4 md:grid-cols-2 p-10 bg-white text-white">
            <Accordion allowZeroExpanded={true} className="bg-light-gray">
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={{ background: "#282726", color: "white" }}>
                            FRONTEND SKILLS
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="font-light">
                            React, React Native (mobile) and Next JS, mostly.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={{ background: "#282726", color: "white" }}>
                            STYLES
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="font-light">
                            Pure CSS of course. And lately, I'm getting use to some frameworks like Tailwind or MUI.
                            I also tried Styled Components and it was ok. Some other essential skills for me:
                            Flexbox and Grid.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={{ background: "#282726", color: "white" }}>
                            BACKEND SKILLS
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="font-light">
                            I use Loopback 3, a lot. It's easy and simple to get your API in minutes.
                            But, I know how to use Node -Express- and have some experience with SQL -Sequelize- and Mongo DB.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={{ background: "#282726", color: "white" }}>
                            STILL EXPLORING
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="font-light">
                            For some personal projects, I'm using Typescript and Tailwind. Also, trying
                            to have some experience with Firebase Authentication and Firestore.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton style={{ background: "#282726", color: "white" }}>
                            OTHER HABILITIES
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p className="font-light">
                            HTML5, Git, Jira, Scrum.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
            <div
                onMouseOver={() => setProjects(true)}
                onMouseLeave={() => setProjects(false)}
                className="grid place-items-center place-content-center md:h-auto h-80 bg-light-blue hover:bg-orange">
                {
                    projects ? (
                        <div className="grid place-content-center place-items-center">
                            <h2 className="font-medium">¿WANT TO SEE MY WORK?</h2>
                            <button onClick={() => setShowWorks(true)} className="bg-blue p-3 rounded mt-6">CLICK HERE</button>
                        </div>
                    ) : <h2 className="animate-pulse tracking-widest text-white">PROJECTS</h2>
                }
            </div>
        </section>
    )
};

export default AccordionComponent;
