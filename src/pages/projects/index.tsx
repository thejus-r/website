import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'


export default function CaseStudiesPage() {
    return <>
        <Head>
            <title>Projects</title>
        </Head>

        <main className="p-12 flex flex-col gap-8">
            <h1 className="text-4xl font-bold">Projects</h1>
            <CaseStudy />
        </main>
    </>
}

function CaseStudy() {
    return <Link href="/projects/scout-app">
        <div className="relative flex gap-4 flex-col md:flex-row h-[60vh] bg-white border-2 shadow-md rounded-3xl p-6">
            <motion.div whileHover={{ scale: 1.025 }} transition={{ duration: 0.3 }} className="relative h-full md:w-1/2">
                <Image className="object-cover z-20 rounded-3xl" quality={1} fill src="/images/test.jpg" alt="Just some Image" />
            </motion.div>
            <div className="md:p-8 h-full flex flex-col justify-between">
                <div>
                    <h4 className="text-md tracking-wider uppercase text-gray-400 font-bold">UI/UX</h4>
                    <h3 className="text-2xl font-bold">Scout App</h3>
                </div>
                <div className="font-medium">
                    <p>Exploring</p>
                </div>
                <div>
                    Read Case-study
                </div>
            </div>
        </div >
    </Link>
}