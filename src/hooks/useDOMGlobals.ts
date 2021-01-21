import React from "react";

const useDOMGlobals = () => {
  const [hasWindow, setHasWindow] = React.useState(
    typeof window !== "undefined"
  );
  const [hasDocument, setHasDocument] = React.useState(
    typeof document !== "undefined"
  );

  React.useEffect(() => {
    setHasDocument(typeof document !== "undefined");
    setHasWindow(typeof window !== "undefined");
  }, [hasWindow, hasDocument]);

  return [hasWindow, hasDocument];
};

export default useDOMGlobals;
