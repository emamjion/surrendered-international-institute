import InfoCountup from "@/components/institute/InfoCountup";
import MissionVision from "@/components/institute/MissionVision";
import Welcome from "@/components/institute/Welcome";

const AboutUs = () => {
  return (
    <div>
      <Welcome />
      <MissionVision />
      <InfoCountup />
      {/* temporary div */}
      <div className="h-[3000px]"></div>
    </div>
  );
};

export default AboutUs;
