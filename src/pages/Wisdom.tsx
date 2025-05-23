
import WisdomTabs from "@/components/wisdom/WisdomTabs";

const Wisdom = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-temple-900 mb-8">Shaolin Wisdom</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Explore the ancient wisdom traditions of the Shaolin Temple, including
        qigong practices, historical manuscripts, and combat theories passed down
        through generations of warrior monks.
      </p>
      <WisdomTabs />
    </div>
  );
};

export default Wisdom;
