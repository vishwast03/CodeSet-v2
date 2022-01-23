const OutputArea = (props) => {
  return (
    <div className="h-full flex-1 border border-[#3aafa9] flex flex-col">
      <div className="text-[#3aafa9] py-1 px-4 border-b-2 border-gray-200">
        Output
      </div>
      <iframe
        className="w-full overflow-auto flex-1"
        srcDoc={props.outputHtml}
        id="output"
      ></iframe>
    </div>
  );
};

export default OutputArea;
