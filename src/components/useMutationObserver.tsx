import * as React from "react";

export const useMutationObserver = (
  selector: string,
  callback: (exists: boolean) => void
) => {
  React.useEffect(() => {
    const observer = new MutationObserver((mutationsList, observer) => {
      for (let mutation of mutationsList) {
        if (mutation.type === "childList") {
          const elementExists = document.querySelector(selector) !== null;
          callback(elementExists);
        }
      }
    });

    const targetNode = document.body;
    const config = { attributes: false, childList: true, subtree: true };

    observer.observe(targetNode, config);

    return () => observer.disconnect();
  }, [selector, callback]);
};
