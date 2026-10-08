import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/Navbar";




function Home() {
  return (
    <div className="h-screen w-full px-4 py-3">

      <div className="w-full py-2  ">
        <Navbar />


        <div className="flex flex-col mt-8 gap-10">
          <CategoryCard
          title="Emotional Unwellness"
          description="Stress Management • Anxiety • Emotional Balance"
        />

        <CategoryCard
          title="Addictions"
          description="Internet • Gaming • Shopping"
        />

        <CategoryCard
          title="Mental health conditions"
          description=""
        />
        </div>
        <h2 className="mt-6 text-2xl text-center cursor-pointer">Apply</h2>

      </div>

    </div>
  );
}

export default Home;