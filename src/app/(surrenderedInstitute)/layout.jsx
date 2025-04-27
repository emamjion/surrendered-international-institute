// components
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

const InstituteLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default InstituteLayout;
