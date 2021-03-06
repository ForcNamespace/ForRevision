import React, { useEffect, useRef } from "react";

export const Modal = ({
  on,
  warn = false,
  exitOnEscape = true,
  title = process.env.REACT_APP_NAME,
  Content,
  message,
  activateText,
  activate = () => console.log("Activate"),
  deactivateText,
  deactivate = () => console.log("Deactivate"),
}: {
  on: boolean;
  warn?: boolean;
  exitOnEscape?: boolean;
  title?: string;
  Content?: any;
  message?: string;
  activateText?: string;
  activate?: () => void;
  deactivateText?: string;
  deactivate?: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const onEscape = ({ key }: any) => {
    if (key === "Escape" && on === true) {
      activate();
      window.removeEventListener("keydown", onEscape);
    }
  };
  const onOutside = (event: any) => {
    if (!modalRef.current?.contains(event.target) && on === true) {
      activate();
      window.removeEventListener("keydown", onOutside);
    }
  };
  useEffect(() => {
    if (exitOnEscape) {
      window.addEventListener("keydown", onEscape);
      window.addEventListener("mousedown", onOutside);
      return () => {
        window.removeEventListener("keydown", onEscape);
        window.removeEventListener("mousedown", onOutside);
      };
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className={`fixed z-10 inset-0 overflow-y-auto ${on ? "" : "hidden"}`}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div ref={modalRef} className="bg-grey px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              {warn && (
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-200 sm:mx-0 sm:h-10 sm:w-10">
                  <svg
                    className="h-6 w-6 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
              )}
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  {title}
                </h3>
                <div className="mt-2">{Content ? <Content /> : message}</div>
                <div>
                  {activate && (
                    <input
                      type="button"
                      onClick={activate}
                      value={activateText}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium 0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    />
                  )}
                  {deactivate && (
                    <input
                      type="button"
                      onClick={deactivate}
                      value={deactivateText}
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2  text-base font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
