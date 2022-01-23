import { useEffect } from "react";

const HTMLArea = (props) => {
  // using useEffect hook to execute code as soon as the component is mounted
  useEffect(() => {
    // intializing the html editor
    const htmlEditor = ace.edit("html-editor");
    htmlEditor.setTheme("ace/theme/chrome");
    htmlEditor.session.setMode("ace/mode/html");
    htmlEditor.session.setTabSize(2);
    htmlEditor.session.setUseWrapMode(true);

    // checking for previously saved code in localStorage
    const prevHtmlCode = localStorage.getItem("htmlCode-CodeSet");
    if (prevHtmlCode) {
      // rendering previously saved code if it exists
      htmlEditor.setValue(prevHtmlCode, 1);
      props.setHtmlCode(prevHtmlCode);
    } else {
      // rendering starter code if code was not saved previously
      htmlEditor.setValue(props.htmlCode, 1);
    }

    // listening the change event in html editor and updating state
    htmlEditor.session.on("change", () => {
      props.setHtmlCode(htmlEditor.getValue());
    });

    // saving the code to localStorage before the window is closed
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      localStorage.setItem("htmlCode-CodeSet", htmlEditor.getValue());
    });

    // saving the code to localStorage before the component is unmounted
    return () => {
      localStorage.setItem("htmlCode-CodeSet", htmlEditor.getValue());
    };
  }, []);

  return (
    <div className="h-full flex-1 border border-[#3aafa9] flex flex-col">
      <div className="text-[#3aafa9] py-1 px-4 border-b-2 border-gray-200">
        HTML
      </div>
      <div
        className="w-full overflow-auto text-base flex-1"
        id="html-editor"
        contentEditable
      ></div>
    </div>
  );
};

export default HTMLArea;
