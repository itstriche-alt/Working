import dynamic from 'next/dynamic';

// Above the fold - load immediately
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

import LazyMotionProvider from '../components/LazyMotionProvider';

// Below the fold - defer JS loading entirely
const Services = dynamic(() => import('../components/Services'), { ssr: true });
const Process = dynamic(() => import('../components/Process'), { ssr: true });
const OurWork = dynamic(() => import('../components/OurWork'), { ssr: true });
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: true });
const Contact = dynamic(() => import('../components/Contact'), { ssr: true });
const Footer = dynamic(() => import('../components/Footer'), { ssr: true });

export default function Home() {
    return (
        <LazyMotionProvider>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Process />
                <OurWork />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </LazyMotionProvider>
    );
}

