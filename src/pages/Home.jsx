import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <section className="bg-home-mobile sm:bg-home-tablet md:bg-home-desktop bg-cover min-h-screen bg-center w-full">
      <Navbar />
    </section>
  );
};

export default Home;
