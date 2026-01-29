import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import Team from "../components/Team";
import ContactComp from "../components/ContactComp";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Team />
        <ContactComp />
      </main>
      <Footer />
    </div>
  );
};

export default Home;