import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../index.css'

function Logout() {
  const navigate = useNavigate();
  function ClearLocalStorage() {
    localStorage.clear();
  }

  return (
    <Link
      className="block py-2 px-4  effect-hover outline-offset-2  dark:hover:text-white"
      to="/login"
      onClick={ClearLocalStorage}
    >
      <svg
        width={20}
        height={20}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width={100} height={100} fill="url(#pattern0)" />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use xlinkHref="#image0_40_5" transform="scale(0.01)" />
          </pattern>
          <image
            id="image0_40_5"
            width={100}
            height={100}
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </Link>
  );
}

export default Logout;
