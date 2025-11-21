/* eslint-disable react/prop-types */
export default function NavButton({ children, className = "", ...props }) {
  return (
    <button
      className={`relative px-6 py-3 bg-gray-200 border-[2px] border-black text-gray-900 font-pixel hover:bg-gray-300 transition-colors ${className}`}
      {...props}
    >
      <span className="absolute -top-2 -left-2 w-4 h-4 border-l-4 border-t-4 border-white"></span>
      <span className="absolute -top-2 -right-2 w-4 h-4 border-r-4 border-t-4 border-white"></span>
      <span className="absolute -bottom-2 -left-2 w-4 h-4 border-l-4 border-b-4 border-white"></span>
      <span className="absolute -bottom-2 -right-2 w-4 h-4 border-r-4 border-b-4 border-white"></span>
      {children}
    </button>
  );
}
