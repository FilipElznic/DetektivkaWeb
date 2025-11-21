import { useState } from "react";

function Secret() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl">
        {/* Pixel corners */}
        <div className="relative inline-block">
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-red-500 animate-pulse"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-red-500 animate-pulse"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-red-500 animate-pulse"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-red-500 animate-pulse"></div>

          <div className="border-4 border-red-500 p-8 md:p-16 bg-black">
            <div className="mb-8">
              <div className="text-6xl mb-4">🔒</div>
              <h1 className="text-4xl md:text-6xl font-pixel text-red-500 mb-6">
                TAJNÉ
              </h1>
              <p className="text-lg md:text-2xl font-pixel text-gray-300 mb-8">
                Gratulujeme! Našli jste tajnou stránku.
              </p>
            </div>

            {!revealed ? (
              <button
                onClick={() => setRevealed(true)}
                className="px-8 py-4 bg-red-500 border-2 border-red-500 text-white font-pixel text-xl hover:bg-red-600 transition-all duration-300 animate-pulse"
              >
                Odhalit tajemství
              </button>
            ) : (
              <div className="animate-fade-in">
                <div className="border-2 border-red-500 p-6 bg-zinc-900 mb-6">
                  <p className="text-base md:text-lg font-pixel text-gray-300 leading-relaxed">
                    Vývoj této hry začal v září 2025 jako školní projekt na
                    SPSUL. Cílem je vytvořit unikátní detektivní zážitek s
                    pixelartovým stylem, který kombinuje klasické prvky
                    detektivek s moderním herním designem.
                  </p>
                  <p className="text-base md:text-lg font-pixel text-gray-300 leading-relaxed mt-4">
                    Sledujte náš GitHub a blog pro více informací o vývoji! 🔍
                  </p>
                </div>
                <div className="text-sm font-pixel text-gray-500">
                  Easter egg nalezen ✓
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Secret;
