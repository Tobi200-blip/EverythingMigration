import { globalStyles } from "./Styles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Articles from "./components/Articles";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ fontFamily:"'DM Sans','Segoe UI',sans-serif",background:"#F8FAFC",color:"#0F172A",minHeight:"100vh" }}>
      <style>{globalStyles}</style>
      <Navbar />
      <Hero />
      <Categories />
      <Articles />
      <Newsletter />
      <Footer />
    </div>
  );
}