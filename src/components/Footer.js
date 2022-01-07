const Footer = () => {
    return (
        <footer id="contact" className="grid grid-cols-1 place-items-center place-content-evenly h-80 bg-gray text-white">
            <div className="flex flex-col items-center">
                <h3 className="text-2xl tracking-wide">DIEGO OREFICI</h3>
                <h3 className="text-sm tracking-wide">JS DEVELOPER</h3>
            </div>
            <img className="rounded h-32" src="/img/diego.jpeg" />
            <hr className="w-4/5 sm:w-2/5" />
            <p className="text-sm">© {new Date().getFullYear()}. All rights, reserved.</p>
        </footer>
    )
}

export default Footer;