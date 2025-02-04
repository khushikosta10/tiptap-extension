import TiptapEditor from "./components/TiptapEditor"; // Import the editor component

const App = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "Arial" }}>
      <h1>Custom Tiptap Extension</h1>
      <TiptapEditor />
    </div>
  );
};

export default App;
