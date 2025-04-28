import BannerSlider from "./BannerSlider";

const Banner = () => {
  return (
    <section className="h-[80vh] lg:[912px] bg-hero bg-cover bg-no-repeat bg-center" id="home">
      <div className="container mx-auto">
        {/* slider */}
        <BannerSlider />
      </div>
    </section>
  );
};

export default Banner;
