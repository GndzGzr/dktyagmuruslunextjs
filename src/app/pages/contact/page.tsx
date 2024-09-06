import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import Form from "@/app/components/Form"
import Info from "@/app/components/Info"
import AboutContent from "@/app/components/AboutContent"

export default function Contact() {
    return (
        <div>
            <div className="hidden lg:block">
                <Info />
            </div>
            <Header />
            <Form/>
            <Footer />
        </div>
    );
}
