import { useState } from "react";
import Modal from "../components/Modal";
import { Fade } from "react-reveal";

const Job = ({ app }) => {
    const [demo, setDemo] = useState(false);

    return (
        <div className="grid grid-cols-1 place-content-between md:place-items-start place-items-center text-white md:h-96 text-justify font-light md:text-base text-sm">
            <p id="content">{app.text}</p>
            <button className="underline text-left outline-none hover:font-semibold md:mt-0 mt-6" onClick={() => setDemo(true)}>Watch demo</button>
            <button className="underline text-left outline-none hover:font-semibold" onClick={() => window.open(app.to)}>Take me to the app</button>
            {
                app.mobile ? (
                    <div className="grid grid-cols-2 md:mt-0 mt-6 md:grid-cols-4 w-6/6 sm:w-2/6 gap-3 place-content-center place-items-center">
                        {
                            app.images.map(i => (
                                <img className="rounded" src={i} />
                            ))
                        }
                    </div>

                ) : (
                    <div className="grid grid-cols-1 md:place-items-start place-items-center md:mt-0 mt-6 md:gap-0 gap-6 md:grid-cols-3">
                        {
                            app.images.map(i => (
                                <img className="w-5/6 rounded" src={i} />
                            ))
                        }
                    </div>
                )
            }
            {
                app.message && <p className="text-sm md:text-left md:mt-0 mt-6 text-center">{app.message}</p>
            }
            <Modal
                open={demo}
                setStateFromComponent={setDemo}
            >
                <div className="grid place-items-center place-content-center w-screen h-screen">
                    <Fade>
                        <video className="w-3/4" src={app.src} autoplay controls loop />
                    </Fade>
                </div>
            </Modal>
        </div >
    )
};

export default Job;