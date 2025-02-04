import { Mark } from "@tiptap/core";

const CustomFontStyle = Mark.create({
  name: "customFontStyle", // Unique name for our extension

  addAttributes() {
    return {
      fontFamily: {
        default: null, // No font applied by default
        parseHTML: (element) => element.style.fontFamily || null,
        renderHTML: (attributes) => {
          if (!attributes.fontFamily) {
            return {};
          }
          return { style: `font-family: ${attributes.fontFamily}` };
        },
      },
    };
  },

  parseHTML() {
    return [{ tag: "span[style*=font-family]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", HTMLAttributes, 0]; // Wrap selected text inside a <span> tag
  },

  addCommands() {
    return {
      setFontStyle:
        (fontFamily) =>
        ({ chain }) => {
          return chain().setMark("customFontStyle", { fontFamily }).run();
        },
      unsetFontStyle:
        () =>
        ({ chain }) => {
          return chain().unsetMark("customFontStyle").run();
        },
    };
  },
});

export default CustomFontStyle;
