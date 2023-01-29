import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Navigation() {
    return <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }} className="p-8 flex justify-between items-center">
        <div>
            <Link href={"/"}>
                <Image width={48} height={48} alt="logo" src="/images/logo.svg" />
            </Link>
        </div>
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    </motion.nav>
}