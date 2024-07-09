import Brand from "./Brand/Brand";
import Footer_first from "./Footer_first/Footer_first";
import Footer_second from "./Footer_second/Footer_second";
import Mobile_mode from "./Mobile/Mobile_mode";

const Footer = () => {
  return (
    <>
      <Mobile_mode />
      <Footer_first />
      <Footer_second />
      <Brand />
    </>
  );
};

export default Footer;
