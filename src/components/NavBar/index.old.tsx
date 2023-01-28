import { motion, Variants } from "framer-motion"
import Link from 'next/link';
import { useRouter } from 'next/router';

type Link = {
    name: string
    path: string
}

const links: Link[] = [
    {
        name: "Projects",
        path: "/projects"
    },
    // {
    //     name: "Blogs",
    //     path: "/blogs"
    // },
    {
        name: "About Me",
        path: "/about"
    },
]

const NavLinkVariants: Variants = {
    initial: {
    },
    active: {
        color: "#fff"
    }
}
const activeVariants: Variants = {

    active: {
        scale: 1,
        opacity: 1,
        backgroundColor: "#000",
    }
}
const textVariants: Variants = {
    initial: {

    },
    active: {
        color: "#fff"
    }
}

export default function NavBar() {

    const router = useRouter()
    const currentPath = router.asPath

    return <motion.nav initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 1.2, ease: [0.32, 0.72, 0, 1] }} className="flex justify-between p-6 font-medium">
        <Link href="/">
            <div className="bg-white border-2 rounded-full px-8 py-4">Thejus Rajendran</div>
        </Link>
        <div className="hidden md:flex space-x-2 rounded-full p-2">
            <ul className="flex bg-white border-2 rounded-full p-2">
                {links.map((link: Link, index) => {
                    return (
                        <motion.li variants={NavLinkVariants} initial="initial" animate={currentPath === link.path ? 'active' : 'initial'} key={index}>
                            <Link href={link.path}>
                                <motion.div className="relative">
                                    <motion.div variants={activeVariants} initial={{ opacity: 0, scale: 0.7 }} className="h-full w-full absolute rounded-full inset-0"></motion.div>
                                    <motion.div variants={textVariants} initial="initial" className="relative px-3 py-2">{link.name}</motion.div>
                                </motion.div>

                            </Link>
                        </motion.li>
                    )
                })}
            </ul>
            <Link href="/">
                <div className="flex justify-center items-center bg-green-300 border-2 border-teal-200 rounded-full p-4">Lets talk</div>
            </Link>
        </div>
    </motion.nav>
}