// App Layout
import Page from "./sections/Page";

// Header
import Header from "./sections/Header";
import Navigation from "./sections/Navigation/Navigation";
import Hero from "./sections/Hero";

// Main
import Main from "./sections/Main";
import Dashboard from "./sections/Dashboard";
import AppStatistics from "./sections/AppStatistics";
import Feature from "./sections/Feature";
import Pricing from "./sections/Pricing/Pricing";
import Testimonials from "./sections/Testimonial/Testimonials";
import CTA from "./sections/CTA";
// Footer
import Footer from "./sections/Footer";
export default function App() {
  return(
  <Page>
   <Header>
    <Navigation />
      <Hero />
   </Header>
   <Main>
    <Dashboard />
    <AppStatistics /> 
    <Feature />
    <Pricing />
    <Testimonials />
    <CTA /> 
   </Main>
   <Footer />
  </Page>
  )
};