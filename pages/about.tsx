import Link from 'next/link'
import Header from '../components/header/Header'
const About = () => {
    return (
        <>
            <Header />
            <Link href="/">
                <a className="bg-darkgreen">Home</a>
            </Link>
        </>
    )
}

export default About
