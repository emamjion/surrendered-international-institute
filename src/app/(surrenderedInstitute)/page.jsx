import About from "@/components/institute/About";
import Articles from "@/components/institute/Articles";
import Banner from "@/components/institute/Banner";
import Gallery from "@/components/institute/Gallery";
import NoticeBoard from "@/components/institute/NoticeBoard";
import Teachers from "@/components/institute/Teachers";
import Testimonials from "@/components/institute/Testimonials";
import UpcomingEvents from "@/components/institute/UpcomingEvents";
import Welcome from "@/components/institute/Welcome";

const InstituteHomepage = () => {
  return (
    <main>
      <Banner />
      <Welcome />
      <About />
      <NoticeBoard />
      <UpcomingEvents />
      <Gallery />
      <Teachers />
      <Testimonials />
      <Articles />

      {/* temporary div */}
      {/* <div className="h-[3000px]"></div> */}
    </main>
  );
};

export default InstituteHomepage;
