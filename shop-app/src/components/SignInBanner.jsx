import { useState } from "react";

function SignInBanner() {
  const [close, setClose] = useState(false);

  return (
    <div
      className={`bg-black w-full py-4 relative ${!close ? "block" : "block md:hidden"}`}
    >
      <div className="flex items-center justify-center">
        <p className="text-white font-thin text-xs md:text-sm">
          Sign up and get 20% off to your first order.{" "}
          <a href="#" className="underline cursor-pointer font-normal">
            Sign Up Now
          </a>
        </p>
        <button
          onClick={() => setClose(true)}
          className="text-white text-lg font-semibold absolute right-29 cursor-pointer hidden md:block "
        >
          <i class="ri-close-large-line"></i>
        </button>
      </div>
    </div>
  );
}

export default SignInBanner;
