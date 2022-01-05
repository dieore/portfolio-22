const Navbar = () => {
    return (
        <nav className="p-3 sticky top-0">
            <ul className="hidden sm:grid grid-cols-3 place-items-center text-white font-light">
                <li className="hover:underline hover:underline-offset-8 hover:font-normal">About</li>
                <li className="hover:underline hover:underline-offset-8 hover:font-normal">Skills</li>
                <li className="hover:underline hover:underline-offset-8 hover:font-normal">Contact</li>
            </ul>
            <div className="flex justify-between items-center sm:hidden">
                <h5 className="text-white font-mono">Diego Orefici</h5>
                <img className="w-8" src="/img/burguer.png" />
            </div>
        </nav>
    )
}

export default Navbar