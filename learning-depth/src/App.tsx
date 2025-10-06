import Post from "./components/Post";

function App() {
  return (
    <div className="">
      <p className="text-white">{import.meta.env.VITE_APP_CREATOR}</p>
      <Post />
    </div>
  );
}

export default App;
