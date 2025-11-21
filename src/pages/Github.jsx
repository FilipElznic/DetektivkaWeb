export default function Github() {
  return (
    <div className="bg-black min-h-screen flex flex-col pt-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="flex-grow h-screen flex items-center justify-center p-4">
        <div className="max-w-3xl w-full relative">
          {/* Pixel border container */}
          <div className="border-4 border-white bg-zinc-900/80 backdrop-blur-sm p-8 md:p-16 relative">
            {/* Decorative Corners */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-black border-l-4 border-t-4 border-white"></div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-black border-r-4 border-t-4 border-white"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-black border-l-4 border-b-4 border-white"></div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-black border-r-4 border-b-4 border-white"></div>

            <div className="flex flex-col items-center text-center space-y-8">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-pixel text-white">
                GitHub Repozitář
              </h1>

              <div className="space-y-6 w-full">
                <div className="inline-block bg-red-900/30 border-2 border-red-500 px-6 py-2 text-red-400 font-pixel tracking-widest animate-pulse">
                  STATUS: PŘÍSNĚ TAJNÉ
                </div>

                <p className="text-lg md:text-xl font-pixel text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  Tento repozitář obsahuje citlivé důkazy, zdrojový kód a
                  vyšetřovací spisy. Přístup je momentálně omezen pouze pro
                  autorizované detektivy a vývojáře.
                </p>

                {/* Fake Terminal */}
                <div className="w-full bg-black border-2 border-gray-700 p-4 md:p-6 font-mono text-left text-xs md:text-sm rounded mt-8 shadow-inner overflow-hidden">
                  <div className="flex gap-2 mb-4 border-b border-gray-800 pb-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-green-500">
                      <span className="text-blue-400">user@detective</span>:
                      <span className="text-white">~/project</span>$ git status
                    </p>
                    <p className="text-gray-400">On branch main</p>
                    <p className="text-gray-400">
                      Your branch is up to date with &apos;origin/main&apos;
                    </p>
                    <p className="text-green-500 mt-2">
                      <span className="text-blue-400">user@detective</span>:
                      <span className="text-white">~/project</span>$ git pull
                      origin main
                    </p>
                    <p className="text-yellow-500">
                      Authenticating with GitHub...
                    </p>
                    <p className="text-red-500 font-bold">
                      Error: Permission denied (publickey).
                    </p>
                    <p className="text-red-500">
                      fatal: Could not read from remote repository.
                    </p>
                    <p className="text-gray-500 italic mt-2">
                      {`// Please contact the administrator for access rights.`}
                    </p>
                    <p className="text-green-500 mt-2 animate-pulse">
                      <span className="text-blue-400">user@detective</span>:
                      <span className="text-white">~/project</span>$_
                    </p>
                  </div>
                </div>
              </div>

              <button
                disabled
                className="mt-8 px-8 py-4 bg-zinc-800 border-2 border-zinc-600 text-zinc-500 font-pixel text-lg md:text-xl cursor-not-allowed flex items-center gap-3 hover:bg-zinc-800 transition-colors"
              >
                <span>🚫</span> Přístup Odepřen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
