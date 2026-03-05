"use client";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import OurWork from '../components/OurWork';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <>
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
        </>
    );
}
