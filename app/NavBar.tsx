import Link from "next/link"
import {TbEaseInOutControlPoints} from "react-icons/tb"

const NavBar = () => {
    const links =[
        {label : 'Dashbaord', href : '/'},
        {label : 'Issues', href : '/issues'}
    ]
  return (
    <nav className="flex space-x-6 border-b mb-5 h-14 px-5 items-center">
        <Link href='/' className="text-2xl"><TbEaseInOutControlPoints /></Link>
        <ul className="flex space-x-6">
        {
            links.map(link =>
                <Link className="text-zinc-500 hover:text-zinc-800 transition-colors" key={link.href} href={link.href}>{link.label}</Link>
                )
        }
        </ul>
    </nav>
  )
}

export default NavBar