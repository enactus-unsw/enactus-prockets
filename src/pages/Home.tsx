import Image from "../components/Images/Procket homepage background.png"

export default function Home() {
  return (
    <>
      <div className="w-full">
        <div style={styles.heroTop}>
          <img
            src={Image}
            style={styles.heroImage}
          />
          <div style={styles.triangleDivider}></div>
          <div className="flex justify-center items-center h-dvh ">
            <h1 className=" text-white font-josefin mb-40 text-9xl tracking-[0.43em] opacity-100">PROCKETS</h1>
          </div>
        </div>

        <div style={styles.heroBottom}>
        </div>
      </div>


    </>
  );
}

//"Hero" is a weird webdev industry standard
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
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
  },
  heroBottom: {
    backgroundColor: 'white',
    padding: '2rem',
  },
};
