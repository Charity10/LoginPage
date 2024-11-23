import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Register = () => {
  const [viewSSO, setViewSSO] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <div className="relative mx-auto p-6 max-w-xs lg:max-w-md">
      <AnimatePresence mode="wait">
        {!viewSSO ? (
          <motion.div
            key="registerView"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <button
              className="text-blue-700 font-bold mb-4"
              onClick={() => setViewSSO(true)}
            >
              Sign up with Single Sign-On (SSO)
            </button>
            <label className="block text-gray-400 mb-2">Email Address</label>
            <input
              className="block w-full py-2 px-3 text-black bg-white border rounded border-gray-300 focus:outline-none focus:border-blue-600"
              type="email"
            />
            <button
              className="w-full mt-4 py-2 text-lg rounded bg-blue-600 text-white hover:bg-blue-800 transition-colors duration-300"
              type="submit"
            >
              Continue
            </button>
            <div className="mt-4">
              <input type="checkbox" id="terms" name="terms" value="terms" />
              <label
                htmlFor="terms"
                className="text-gray-400 text-sm pl-2 leading-snug"
              >
                I have read and agree to Reads Privacy Policy and Terms of
                Services
              </label>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="SSOView"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-4 text-center">
              <p className="bg-red-900 text-white rounded-full py-2">Google</p>
              <p className="bg-green-800 text-white rounded-full py-2">Microsoft</p>
              <p className="bg-blue-800 text-white rounded-full py-2">Twitter</p>
            </div>
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-slate-600"></div>
              <p className="px-4 text-gray-500">or</p>
              <div className="flex-1 h-px bg-slate-600"></div>
            </div>
            <button
              className="text-blue-700 font-bold block mx-auto mb-4"
              onClick={() => setViewSSO(false)}
            >
              Sign up with email
            </button>
            <div className="mt-4">
              <input type="checkbox" id="terms" name="terms" value="terms" />
              <label
                htmlFor="terms"
                className="text-gray-400 text-sm pl-2 leading-snug"
              >
                I have read and agree to Reads Privacy Policy and Terms of
                Services
              </label>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Register;
