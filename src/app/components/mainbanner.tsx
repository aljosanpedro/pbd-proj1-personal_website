import Image from "next/image";

export default function MainBanner() {
  return (
    // Base
    // sticky: fixed position, but scrolls with parent
    // sm: flex-row for mobile
    // ml: margin-left (m: all sides)
    // bg-white/30: white background with 30% opacity
    // Hover
    // hover:scale-102: slightly enlarges on hover
    // transition-transform: smooth transition for transform properties
    // duration-300: transition duration of 300ms
    // ease-in-out: transition timing function for smooth start and end
    // shadow-lg: large shadow for depth effect
    <div
      className="sticky top-0 flex flex-col sm:flex-row z-50 w-[98%] h-auto border border-gray-300 rounded-sm backdrop-blur-sm
    hover:scale-102 transition-transform duration-300 ease-in-out shadow-lg bg-white/30 ml-2 mr-3 sm:ml-3.5 sm:mr-2 md:mr-1"
    >
      {/* Left Section */}
      {/* treated as row bc only 1 item */}
      {/* m-2: 8 pixels (refer to cheatsheet/daigler) */}
      {/* auto-wraps when sm:w-24 */}
      <div className="m-2 flex justify-center w-full sm:w-24">
        <Image
          src="/images/IDPIC.png"
          alt="Profile"
          // 72 > 80 of assigned space
          width={72}
          height={72}
          // eager: server prioritizes loading
          loading="eager"
          // rounded-full: circle
          // object-cover: fit assigned space
          // w/h = 20 = 80px > 72px; 72 -> 80
          className="rounded-full object-cover w-20 h-20"
        />
      </div>

      {/* Right Section */}
      {/* treated as cols bc many items */}
      {/* sm:justify-end: go to bottom (bc col) */}
      {/* sm:items-start: align items to the start (left) on small screens */}
      <div className="m-2 flex flex-col items-center w-auto sm:justify-end sm:items-start">
        <h1 className="text-lg font-bold">
          Alejandre Jose R. San Pedro (Aljo)
        </h1>
        <p className="text-sm text-blue-500">MSIT Student | Psychometrician</p>
      </div>
    </div>
  );
}
