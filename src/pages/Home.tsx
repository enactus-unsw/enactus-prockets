import Image from "../components/Images/Procket homepage background.png"

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

      {/* Hero Bottom Section */}
      <div className="bg-white px-4 py-8">
        {/* Future content */}
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
