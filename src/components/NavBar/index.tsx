import Image from "next/image"

export default function Navigation() {
    return <nav className="p-8 flex justify-between">
        <div>
            <Image width={32} height={32} alt="logo" src="/images/logo.svg" />
        </div>
        <div>
            <ul>
                <li>Projects</li>
            </ul>
        </div>
    </nav>
}