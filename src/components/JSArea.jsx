import { useEffect } from "react";

const JSArea = (props) => {
  const display = props.display;

  // using useEffect hook to execute code as soon as the component is mounted
  useEffect(() => {
    // initializing the js editor
    const jsEditor = ace.edit("js-editor");
    jsEditor.setTheme("ace/theme/chrome");
    jsEditor.session.setMode("ace/mode/javascript");
    jsEditor.session.setTabSize(2);
    jsEditor.session.setUseWrapMode(true);

    // checking for previously saved code in localStorage
    const prevJsCode = localStorage.getItem("jsCode-CodeSet");
    if (prevJsCode) {
      // rendering the saved code if it exists
      jsEditor.setValue(prevJsCode, 1);
      props.setJsCode(prevJsCode);
    } else {
      // rendering the starter code if the code was not saved previously
      jsEditor.setValue(props.jsCode, 1);
    }

    // listening change event is js editor and updating state
    jsEditor.session.on("change", () => {
      props.setJsCode(jsEditor.getValue());
    });

    // saving the code to localStorage before the window is closed
    window.addEventListener("beforeunload", (e) => {
      e.preventDefault();
      localStorage.setItem("jsCode-CodeSet", jsEditor.getValue());
    });

    // saving the code to localStorage before the component is unmounted
    return () => {
      localStorage.setItem("jsCode-CodeSet", jsEditor.getValue());
    };
  }, []);

  return (
    <div
      className={`h-full flex-1 border border-[#3aafa9] flex flex-col ${
        display ? "block" : "hidden"
      }`}
    >
      <div className="text-[#3aafa9] py-1 px-4 border-b-2 border-gray-200">
        JavaScript
      </div>
      <div
        className="w-full overflow-auto text-base flex-1"
        id="js-editor"
        contentEditable
      ></div>
    </div>
  );
};

export default JSArea;
