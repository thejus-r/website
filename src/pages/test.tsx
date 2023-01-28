import Image from "next/image"
import { motion } from 'framer-motion'

export default function Test() {
    const d = new Date("2023-01-28")
    console.log(d)
    return <main className="p-12 flex flex-col gap-8">
        <h1 className="text-2xl font-bold"></h1>
    </main>
}