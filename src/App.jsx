import Controller from "./components/Controller";
import CSSArea from "./components/CSSArea";
import HTMLArea from "./components/HTMLArea";
import JSArea from "./components/JSArea";
import Navbar from "./components/Navbar";
import OutputArea from "./components/OutputArea";
import { useState, useEffect } from "react";
import logo from "./logo.png";

const App = () => {
  // state to control auto-run mode
  const [autoRun, setAutoRun] = useState(false);

  // states to control display of different sections
  const [htmlDisplay, setHtmlDisplay] = useState(true);
  const [cssDisplay, setCssDisplay] = useState(false);
  const [jsDisplay, setJsDisplay] = useState(false);
  const [outputDisplay, setOutputDisplay] = useState(true);

  // states to store code
  const [htmlCode, setHtmlCode] = useState(`<!DOCTYPE html>
<html lang="en">
<body>

</body>
</html>
`);

  const [cssCode, setCssCode] = useState(`/*
p{
  color: white;
  background-color: red;
}
*/
`);

  const [jsCode, setJsCode] = useState(`/*
console.log("Hello World!");
*/
`);

  // state to store output
  const [outputHtml, setOutputHtml] = useState("");

  // functiont to toggle display of specific section
  const toggleDisplay = (target) => {
    switch (target) {
      case "html":
        setHtmlDisplay(!htmlDisplay);
        break;
      case "css":
        setCssDisplay(!cssDisplay);
        break;
      case "js":
        setJsDisplay(!jsDisplay);
        break;
      case "output":
        setOutputDisplay(!outputDisplay);
        break;
    }
  };

  // fundtion to update output
  const updateOutput = () => {
    setOutputHtml(`
    <style>
      ${cssCode}
    </style>
      ${htmlCode}
    <script>
      ${jsCode}
    </script>
    `);
  };

  // updating output automatically if the auto-run mode is enabled
  useEffect(() => {
    if (autoRun) updateOutput();
  }, [htmlCode, cssCode, jsCode]);

  return (
    <main className="w-screen h-screen flex flex-col">
      <Navbar />
      <Controller
        toggleDisplay={toggleDisplay}
        htmlDisplay={htmlDisplay}
        cssDisplay={cssDisplay}
        jsDisplay={jsDisplay}
        outputDisplay={outputDisplay}
        updateOutput={updateOutput}
        autoRun={autoRun}
        setAutoRun={setAutoRun}
      />
      <div className="w-full flex-1 flex" id="editor">
        <HTMLArea
          htmlCode={htmlCode}
          setHtmlCode={setHtmlCode}
          display={htmlDisplay}
        />
        <CSSArea
          cssCode={cssCode}
          setCssCode={setCssCode}
          display={cssDisplay}
        />
        <JSArea jsCode={jsCode} setJsCode={setJsCode} display={jsDisplay} />
        <OutputArea outputHtml={outputHtml} display={outputDisplay} />
        {htmlDisplay || cssDisplay || jsDisplay || outputDisplay || (
          <img
            src={logo}
            className="w-32 h-32 absolute top-1/2 left-1/2 -translate-x-1/2"
            alt="logo"
          />
        )}
      </div>
    </main>
  );
};

export default App;
