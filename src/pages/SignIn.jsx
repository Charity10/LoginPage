import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SignIn = () => {
  const [viewSSO, setViewSSO] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="flex justify-center min-h-screen px-4 bg-gray-50">
      <div className=" max-w-sm text-slate-500 p-6">
        <AnimatePresence mode="wait">
          {!viewSSO ? (
            <motion.div
              key="emailView"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <label className="block text-gray-400 mb-2">Email Address</label>
              <input
                className="block w-full py-2 px-3 text-black bg-white border rounded border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-600"
                type="email"
              />
              <button
                className="w-full mt-6 py-2 text-lg bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300"
                type="submit"
              >
                Continue
              </button>

              <div className="flex flex-col items-center gap-4 mt-6">
                <button
                  onClick={() => setViewSSO(true)}
                  className="text-blue-700 font-bold"
                >
                  View all options
                </button>
                <p className="text-xs text-center">
                  By signing in, I agree to Reads terms of Services and
                  acknowledge I have read the Privacy Policy.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="ssoView"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4 text-center">
                <button className="bg-red-900 text-white rounded-full py-2">
                  Google
                </button>
                <button className="bg-green-800 text-white rounded-full py-2">
                  Microsoft
                </button>
                <button className="bg-blue-800 text-white rounded-full py-2">
                  Twitter
                </button>
              </div>
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 h-px bg-slate-600"></div>
                <p className="text-gray-500">or</p>
                <div className="flex-1 h-px bg-slate-600"></div>
              </div>
              <button
                className="text-blue-700 font-bold mb-6 block mx-auto"
                onClick={() => setViewSSO(false)}
              >
                Sign in with email and password
              </button>
              <p className="text-xs text-center">
                By signing in, I agree to Reads terms of Services and
                acknowledge I have read the Privacy Policy.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SignIn;
