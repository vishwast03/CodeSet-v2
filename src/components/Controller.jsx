const Controller = (props) => {
  return (
    <div className="w-full h-fit bg-gray-600 flex justify-center basis-auto relative">
      <button
        className={`border border-black ${
          props.htmlDisplay ? "bg-[#98f1ec]" : "bg-gray-50"
        } rounded-md p-0.5 mx-1 my-2`}
        onClick={() => {
          props.toggleDisplay("html");
        }}
      >
        HTML
      </button>
      <button
        className={`border border-black ${
          props.cssDisplay ? "bg-[#98f1ec]" : "bg-gray-50"
        } rounded-md p-0.5 mx-1 my-2`}
        onClick={() => {
          props.toggleDisplay("css");
        }}
      >
        CSS
      </button>
      <button
        className={`border border-black ${
          props.jsDisplay ? "bg-[#98f1ec]" : "bg-gray-50"
        } rounded-md p-0.5 mx-1 my-2`}
        onClick={() => {
          props.toggleDisplay("js");
        }}
      >
        JavaScript
      </button>
      <button
        className={`border border-black ${
          props.outputDisplay ? "bg-[#98f1ec]" : "bg-gray-50"
        } rounded-md p-0.5 mx-1 my-2`}
        onClick={() => {
          props.toggleDisplay("output");
        }}
      >
        Output
      </button>
      <div className="absolute z-10 right-4 top-2">
        <label htmlFor="auto-run" className="text-white mx-2">
          <input
            type="checkbox"
            checked={props.autoRun}
            onChange={() => props.setAutoRun(!props.autoRun)}
            className="m-1"
            id="auto-run"
          />
          Auto Run
        </label>
        <button
          className="font-bold text-lg text-white bg-[#3aafa9] hover:bg-[#27928d] transition-colors px-2 py-0.5 rounded-md"
          id="run-btn"
          onClick={props.updateOutput}
        >
          Run
        </button>
      </div>
    </div>
  );
};

export default Controller;
