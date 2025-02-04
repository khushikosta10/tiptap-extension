# React + Vite(Custom Font Style Extension for Tiptap)
This project is a custom extension for Tiptap, a powerful, customizable text editor built for the web. The extension allows users to apply custom font styles to selected text, providing a more personalized and creative approach to text styling.

# Features 
Custom Font Style: Easily apply a custom font to selected text in the Tiptap editor.
Font Selector: Choose from a range of fonts to style the text.
User-friendly UI: A simple, clean, and intuitive interface for font selection and application.
Real-time Preview: See the changes immediately after applying a font style.

# 🛠 Tech Stack
ReactJS
Tiptap (Rich Text Editor)
JavaScript (ES6+)
CSS for Styling
VS Code (Used for development)

# 🚀 Setup Instructions
Follow these steps to set up and run the project in VS Code:

1️⃣ Clone the Repository
git clone https://github.com/khushikosta10/custom-tiptap-extension.git

2️⃣ Open in VS Code
cd custom-tiptap-extension
code .

3️⃣ Install Dependencies
Run the following command to install required packages:
npm install

4️⃣ Start the Development Server
npm run dev

5️⃣ Open in Browser
Once the server starts, open http://localhost:5173 in your browser to access the editor.

🎮 How to Use
Select the text inside the editor.
Choose a custom font from the dropdown.
The selected text will be updated with the chosen font instantly.

📌 Folder Structure
custom-tiptap-extension/
│── src/
│   ├── components/
│   │   ├── CustomFontStyle.js  # Custom Tiptap extension for font styles
│   │   ├── TiptapEditor.jsx    # Main Tiptap editor component
│   │   ├── TiptapEditor.css    # Styling for the editor
│   ├── App.jsx                 # Main application file
│   ├── main.jsx                # Renders the React app
│── public/
│── package.json
│── vite.config.js
│── README.md

📝 Contributing
Feel free to fork the repository and submit pull requests for any improvements. If you encounter any issues, report them via GitHub.
