import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Amenities from "./components/Amenities";
import Rooms from "./components/Rooms";
import Dining from "./components/Dining";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import BookingCTA from "./components/BookingCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Amenities />
      <Rooms />
      <Dining />
      <Gallery />
      <Testimonials />
      <BookingCTA />
      <Footer />
    </div>
  );
}
