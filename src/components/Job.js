import { useState } from "react";
import Modal from "../components/Modal";

const Job = ({ app }) => {
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
};

export default Job;