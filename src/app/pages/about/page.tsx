import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import AboutContent from "@/app/components/AboutContent"
import Info from "@/app/components/Info"
export default function About() {
    return (
        <div>
            <div className="hidden lg:block">
                <Info />
            </div>
            <Header />
            <AboutContent />
            <Footer />
        </div>
    );
}
