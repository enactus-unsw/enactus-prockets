import Image from "../components/Images/Procket homepage background.png";
import missionImage from "../components/Images/missionImg.png";
import serviceImage from "../components/Images/serviceImg.png";
import productImage from "../components/Images/productImg.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Top */}
      <div style={styles.heroTop}>
        <img
          src={Image}
          style={styles.heroImage}
          alt="Hero Background"
        />

        {/* Triangle Divider */}
        <div style={styles.triangleDivider}></div>

        {/* Centered Text */}
        <div className="relative z-10 flex justify-center items-center h-screen px-4">
          <h1 className="text-white font-josefin tracking-[0.25em] text-[clamp(2rem,8vw,6rem)] text-center">
            PROCKETS
          </h1>
        </div>
      </div>

      <div className="px-4 py-20 flex flex-col md:flex-row justify-center items-center gap-12 bg-white">
        {[
          { label: "MISSION", image: missionImage, to: '/about-us/mission' },
          { label: "SERVICE", image: serviceImage, to: '/about-us/services' },
          { label: "PRODUCT", image: productImage, to: '/about-us/products' }
        ].map((item, idx) => (
          <Link key={idx} to={item.to} className="relative w-full max-w-xs overflow-hidden shadow-lg">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 px-4 py-16 text-xl md:text-5xl font-semibold text-white">
              {item.label}
            </div>
            <img
              src={item.image}
              alt={`${item.label} Image`}
              className="w-full object-cover"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

const styles = {
  heroTop: {
    position: 'relative' as const,
    height: '100vh',
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute' as const,
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    opacity: 0.8,
    pointerEvents: 'none' as const,
  },
  triangleDivider: {
    clipPath: 'polygon(50% 80%, 0% 100%, 100% 100%)',
    backgroundColor: 'white',
    opacity: 1,
    position: 'absolute' as const,
    bottom: 0,
    width: '100%',
    height: '20vh',
  },
};
