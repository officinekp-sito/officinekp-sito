import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="h-20 bg-[#C7DFF9] flex items-center px-8 sticky top-0 z-50">

      {/* Logo */}
      <a href="#home" className="flex items-center gap-3">
        <span className="text-xl font-bold text-[#1F2937]">
          Officine KP
        </span>

        <Image
          src="/Pixelpeluche.png"
          alt="Officine KP"
          width={60}
          height={60}
          className="h-auto"
        />
      </a>

      {/* Menu */}
      <div className="flex-1 flex justify-center items-center gap-8 text-[#1F2937]">

        <a href="#home" className="hover:opacity-60">
          Home
        </a>

        <a href="#3d-printing" className="hover:opacity-60">
          3D Printing
        </a>

        {/* Design */}
        <div className="relative group">
          <a href="#design" className="hover:opacity-60">
            Design
          </a>

          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 hidden group-hover:block">
            <div className="bg-white rounded-2xl shadow-lg border border-[#1F2937]/10 overflow-hidden min-w-32">

              <a
                href="#freecad"
                className="block px-5 py-3 hover:bg-[#F3F4F6]"
              >
                FreeCAD
              </a>

              <a
                href="#blender"
                className="block px-5 py-3 hover:bg-[#F3F4F6]"
              >
                Blender
              </a>

            </div>
          </div>
        </div>

        <a href="#b2b" className="hover:opacity-60">
          B2B
        </a>

        <a href="#privati" className="hover:opacity-60">
          Private
        </a>

        <a href="/en/portfolio" className="hover:opacity-60">
          Portfolio
        </a>

        <a href="#chi-sono" className="hover:opacity-60">
          About
        </a>

        <a
          href="#preventivo"
          className="bg-[#1F2937] text-white px-6 py-3 rounded-2xl hover:opacity-80"
        >
          Request a quote
        </a>

      </div>

      {/* Languages */}
      <div className="flex items-center gap-4 text-sm font-semibold text-[#1F2937]">

        <a
          href="/"
          className="flex items-center gap-2 hover:opacity-60"
        >
          <Image
            src="/Bandiere/it.webp"
            alt="IT"
            width={24}
            height={16}
            className="w-6 h-4 object-cover rounded-sm"
          />
          IT
        </a>

        <a
          href="/en"
          className="flex items-center gap-2 hover:opacity-60"
        >
          <Image
            src="/Bandiere/eu.webp"
            alt="EU"
            width={24}
            height={16}
            className="w-6 h-4 object-cover rounded-sm"
          />
          EU
        </a>

      </div>

    </nav>
  );
}