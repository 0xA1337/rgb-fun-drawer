import Footer from "./components/Footer";
import Grid from "./components/Grid";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">RGB.fun Drawer</h1>
        <Grid />
      </main>
      <Footer />
    </div>
  );
};

export default App;
