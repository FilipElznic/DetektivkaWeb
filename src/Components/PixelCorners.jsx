export default function PixelCorners({ size = "md" }) {
  const sizeMap = {
    sm: "w-2 h-2",
    md: "w-4 h-4",
    lg: "w-6 h-6",
  };

  const cornerClass = sizeMap[size] || sizeMap.md;

  return (
    <>
      <div className={`absolute -top-1 -left-1 ${cornerClass} bg-white`}></div>
      <div className={`absolute -top-1 -right-1 ${cornerClass} bg-white`}></div>
      <div
        className={`absolute -bottom-1 -left-1 ${cornerClass} bg-white`}
      ></div>
      <div
        className={`absolute -bottom-1 -right-1 ${cornerClass} bg-white`}
      ></div>
    </>
  );
}
