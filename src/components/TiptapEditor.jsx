import { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import CustomFontStyle from "./CustomFontStyle"; // Ensure this is the correct path
import "./TiptapEditor.css"; 

const TiptapEditor = () => {
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [isDefaultTextVisible, setIsDefaultTextVisible] = useState(true);

  const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana", "Comic Sans MS", "Impact"];

  const editor = useEditor({
    extensions: [StarterKit, CustomFontStyle],
    content: isDefaultTextVisible ? "<p>Select text and apply a custom font!</p>" : "",
  });

  if (!editor) return null;

  const applyFont = (font) => {
    setSelectedFont(font);
    editor.chain().focus().setFontStyle(font).run();
  };

  const handleEditorClick = () => {
    if (isDefaultTextVisible) {
      setIsDefaultTextVisible(false);
      editor.commands.clearContent();
    }
  };

  return (
    <div className="editor-container">
      <h2 className="editor-title">My Custom Tiptap Editor</h2>

      <div className="font-selector-container">
        <label htmlFor="font-selector" className="font-selector-label">Select Font:</label>
        <select
          id="font-selector"
          value={selectedFont}
          onChange={(e) => applyFont(e.target.value)}
          className="font-selector"
        >
          {fonts.map((font) => (
            <option key={font} value={font} style={{ fontFamily: font }}>
              {font}
            </option>
          ))}
        </select>
      </div>

      <div
        className="editor-area"
        onClick={handleEditorClick}
      >
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TiptapEditor;
