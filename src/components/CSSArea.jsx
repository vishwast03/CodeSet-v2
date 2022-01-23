import { useEffect } from "react";

const CSSArea = (props) => {
  // using useEffect hook to execute code as soon as the component is mounted
  useEffect(() => {
    // initializing the css editor
    const cssEditor = ace.edit("css-editor");
    cssEditor.setTheme("ace/theme/chrome");
    cssEditor.session.setMode("ace/mode/css");
    cssEditor.session.setTabSize(2);
    cssEditor.session.setUseWrapMode(true);

    // checking for previously saved code
    const prevCssCode = localStorage.getItem("cssCode-CodeSet");
    if (prevCssCode) {
      // rendering the saved code if it exists
      cssEditor.setValue(prevCssCode, 1);
      props.setCssCode(prevCssCode);
    } else {
      // rendering starter code if the code was not saved previously
      cssEditor.setValue(props.cssCode, 1);
    }

    // listneing change event in css editor and updating state
    cssEditor.session.on("change", () => {
      props.setCssCode(cssEditor.getValue());
    });

    // saving the code to localStorage before the window is closed
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      localStorage.setItem("cssCode-CodeSet", cssEditor.getValue());
    });

    // saving the code to localStorage before the component is unmounted
    return () => {
      localStorage.setItem("cssCode-CodeSet", cssEditor.getValue());
    };
  }, []);

  return (
    <div className="h-full flex-1 border border-[#3aafa9] flex flex-col">
      <div className="text-[#3aafa9] py-1 px-4 border-b-2 border-gray-200">
        CSS
      </div>
      <div
        className="w-full overflow-auto text-base flex-1"
        id="css-editor"
        contentEditable
      ></div>
    </div>
  );
};

export default CSSArea;
