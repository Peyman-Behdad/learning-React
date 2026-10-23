import { useState } from "react";

function SignInBanner() {
  const [close, setClose] = useState(false);

  if (close) return null;

  return (
    <div className="bg-black w-full py-4 relative">
      <div className="flex items-center justify-center">
        <p className="text-white font-thin text-xs md:text-sm">
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="underline cursor-pointer font-normal">
            Sign Up Now
          </a>
        </p>
        <button
          onClick={() => setClose(true)}
          aria-label="Close banner"
          className="text-white text-lg font-semibold absolute right-29 cursor-pointer hidden md:block "
        >
          <i className="ri-close-large-line"></i>
        </button>
      </div>
    </div>
  );
}

export default SignInBanner;
