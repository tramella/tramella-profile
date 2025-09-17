import ContactForm from "@/components/ContactForm";
import Project from "@/components/Project";
import "../styles/shine.css";
import WhyUs from "@/components/WhyUs";
import Skills from "@/components/Skills";
import MainSlide from "@/components/MainSlide";


export default function Home() {
  return (
   <div className="w-full">
      <MainSlide/>
      <Skills/>
      <WhyUs/>
      <Project/>
      <ContactForm/>
   </div>
  );
}
