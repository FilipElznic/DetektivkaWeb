/* eslint-disable react/prop-types */
export default function PixelatedFrame({
  children,
  size = "large",
  className = "",
}) {
  const sizeClasses = {
    small: "w-48 h-48 md:w-56 md:h-56",
    medium: "w-48 h-48 md:w-72 md:h-72",
    large: "w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96",
  };

  return (
    <div className={`relative ${sizeClasses[size]} ${className}`}>
      {/* Corner decorations */}
      <div className="absolute -top-3 md:-top-5 -left-3 md:-left-5 w-8 h-8 md:w-12 md:h-12 bg-white"></div>
      <div className="absolute -bottom-2 md:-bottom-3 -left-2 md:-left-3 w-8 h-8 md:w-12 md:h-12 bg-white"></div>
      <div className="absolute -bottom-3 md:-bottom-5 -right-2 md:-right-3 w-8 h-8 md:w-12 md:h-12 bg-white"></div>
      <div className="absolute -top-2 md:-top-3 -right-2 md:-right-3 w-8 h-8 md:w-12 md:h-12 bg-white"></div>

      {/* Edge decorations */}
      <div className="absolute -top-2 md:-top-3 -left-3 md:-left-5 w-32 md:w-48 h-8 md:h-12 bg-white"></div>
      <div className="absolute -top-2 md:-top-3 -left-1 md:-left-2 w-6 md:w-10 h-32 md:h-48 bg-white"></div>
      <div className="absolute -bottom-2 md:-bottom-3 -right-1 md:-right-2 w-6 md:w-10 h-32 md:h-48 bg-white"></div>
      <div className="absolute -bottom-2 md:-bottom-3 right-3 md:right-5 w-32 md:w-48 h-8 md:h-12 bg-white"></div>

      {/* Content */}
      <div className="absolute w-full h-full flex items-center justify-center bg-white overflow-hidden">
        {children}
      </div>
    </div>
  );
}
