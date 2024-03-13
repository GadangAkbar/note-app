import { Link, Outlet } from "react-router-dom"

function Navbar({ token, onLogout }) {

    return (
        <>
            <div className="flex justify-around py-6 text-white">

                <nav className="flex gap-12">
                    {token !== null ? null : <Link to={"/Regist"}><span className=" hover:text-sky-300 transition-all active:text-sky-300 focus:text-sky-300 ">Regist</span></Link>}
                    {token !== null ? null : <Link to={"/Login"}><span className=" hover:text-sky-300 transition-all active:text-sky-300 focus:text-sky-300 ">Login</span></Link>}
                    <Link to={"/Note"} className=" hover:text-sky-300 transition-all active:text-sky-300 focus:text-sky-300 ">Note</Link>
                    {token !== null ? <Link onClick={() => onLogout()}><span className="text-white font-sans hover:text-slate-300">Logout</span></Link> : null}
                </nav>
            </div>
            <Outlet />
        </>
    )
}

export default Navbar