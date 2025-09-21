import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../../assets/BlogOne img/navImg/Elearna.svg";
import shopicon from "../../../assets/BlogOne img/navImg/shope.svg";

function Navbar2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCourseTab, setActiveCourseTab] = useState("free"); // 👈 track active tab

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      title: "Home",
      dropdown: [
        { label: "Home One", path: "/homeone" },
        { label: "Home Two", path: "/hometwo" },
        { label: "Home Three", path: "/homethree" },
      ],
    },
    {
      title: "Courses",
      megaMenu: true,
      freeCourses: {
        title: "Free Courses",
        description: "Free learning resources for skill development.",
        subItems: [
          {
            label: "Finance",
            description: "Understanding corporate finance and investments",
            path: "/finance",
          },
          {
            label: "Design",
            description: "Advanced photoshop techniques for designers",
            path: "/design",
          },
          {
            label: "Management",
            description: "Crisis management and problem-solving strategies",
            path: "/management",
          },
          {
            label: "Development",
            description: "Building single page applications with Angular",
            path: "/development",
          },
        ],
      },
      paidCourses: {
        title: "Paid Courses",
        description: "Courses are available upon purchase. (Requires login)",
        subItems: [
          {
            label: "Finance",
            description: "Deep dive into corporate finance",
            path: "/paid-finance",
          },
          {
            label: "Design",
            description: "Professional design masterclass",
            path: "/paid-design",
          },
          {
            label: "Management",
            description: "Leadership and team management",
            path: "/paid-management",
          },
          {
            label: "Development",
            description: "Fullstack web development",
            path: "/paid-development",
          },
        ],
      },
    },
    {
      title: "Pages",
      dropdown: [
        { label: "About One", path: "/aboutone" },
        { label: "About Two", path: "/abouttwo" },
        { label: "Course One", path: "/courseone" },
        { label: "Course Two", path: "/coursetwo" },
        { label: "Course Three", path: "/coursethree" },
        { label: "FAQ", path: "/faq" },
        { label: "Pricing One", path: "/pricingone" },
        { label: "Pricing Two", path: "/pricingtwo" },
        { label: "Pricing Three", path: "/pricingthree" },
        { label: "Career", path: "/career" },
        { label: "Events", path: "/events" },
        { label: "Team", path: "/team" },
      ],
    },
    {
      title: "Blog",
      dropdown: [
        { label: "Blog One", path: "/blogone" },
        { label: "Blog Two", path: "/blogtwo" },
        { label: "Blog Three", path: "/blogthree" },
      ],
    },
    {
      title: "Contact",
      dropdown: [
        { label: "Contact One", path: "/contactone" },
        { label: "Contact Two", path: "/contacttwo" },
        { label: "Contact Three", path: "/contactthree" },
      ],
    },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-colors duration-300 ${
        isScrolled ? "bg-[#20383e]" : "bg-transparent"
      }`}
    >
      {/* Main nav */}
      <div className="flex items-center justify-between px-4 md:px-10 py-4 md:py-6">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 md:h-14" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-12 font-bold text-white">
          {navItems.map((item, idx) => (
            <li key={idx} className="relative group cursor-pointer">
              <div className="flex items-center gap-1 select-none">
                {item.title}
                <FaChevronDown className="text-sm" />
              </div>

              {/* Default dropdown */}
              {!item.megaMenu && (
                <ul className="absolute left-0 top-full mt-2 w-48 bg-white text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.dropdown.map((drop, i) => (
                    <li
                      key={i}
                      className="px-4 py-2 cursor-pointer transition-transform transform origin-left hover:scale-110 hover:text-yellow-400"
                    >
                      <Link to={drop.path}>{drop.label}</Link>
                    </li>
                  ))}
                </ul>
              )}

              {/* Mega Menu (2-column layout) */}
              {item.megaMenu && (
                <div className="absolute left-0 top-full mt-2 w-[700px] bg-[#eaeff6] text-black rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-6 grid grid-cols-2 gap-6">
                  {/* LEFT: Tabs (Free / Paid) */}
                  <div className="space-y-4 border-r pr-4">
                    <button
                      className={`block text-left w-full p-2 rounded-md font-semibold ${
                        activeCourseTab === "free"
                          ? "bg-white text-black"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveCourseTab("free")}
                    >
                      {item.freeCourses.title}
                      <p className="text-sm font-normal text-gray-500">
                        {item.freeCourses.description}
                      </p>
                    </button>

                    <button
                      className={`block text-left w-full p-2 rounded-md font-semibold ${
                        activeCourseTab === "paid"
                          ? "bg-white text-black"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveCourseTab("paid")}
                    >
                      {item.paidCourses.title}
                      <p className="text-sm font-normal text-gray-500">
                        {item.paidCourses.description}
                      </p>
                    </button>
                  </div>

                  {/* RIGHT: Sub Items */}
                  <div className="grid grid-cols-2 gap-4">
                    {activeCourseTab === "free" &&
                      item.freeCourses.subItems.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="block p-2 rounded-md hover:bg-gray-100"
                        >
                          <h4 className="font-semibold">{sub.label}</h4>
                          <p className="text-sm text-gray-500">
                            {sub.description}
                          </p>
                        </Link>
                      ))}

                    {activeCourseTab === "paid" &&
                      item.paidCourses.subItems.map((sub, i) => (
                        <Link
                          key={i}
                          to={sub.path}
                          className="block p-2 rounded-md hover:bg-gray-100"
                        >
                          <h4 className="font-semibold">{sub.label}</h4>
                          <p className="text-sm text-gray-500">
                            {sub.description}
                          </p>
                        </Link>
                      ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Auth & Shop */}
        <div className="hidden md:flex items-center gap-6 text-white font-bold text-base">
          <img src={shopicon} alt="Shop" className="w-7" />
          <Link to="/login" className="hover:text-yellow-400 transition-colors">
            Login
          </Link>
          <span>|</span>
          <Link
            to="/register"
            className="hover:text-yellow-400 transition-colors"
          >
            Register
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (simplified) */}
      <div
        className={`md:hidden bg-[#20383e] text-white px-6 py-4 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 font-bold">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <details className="group">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  {item.title}
                  <FaChevronDown className="ml-2 text-sm group-open:rotate-180 transition-transform" />
                </summary>

                {/* Normal dropdown */}
                {!item.megaMenu &&
                  item.dropdown.map((drop, i) => (
                    <Link
                      key={i}
                      to={drop.path}
                      className="block pl-4 py-1 hover:text-yellow-400"
                    >
                      {drop.label}
                    </Link>
                  ))}

                {/* Mega menu simplified */}
                {item.megaMenu && (
                  <div className="pl-4 mt-2">
                    <p className="font-semibold">Free Courses</p>
                    {item.freeCourses.subItems.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="block pl-4 py-1 text-sm hover:text-yellow-400"
                      >
                        {sub.label}
                      </Link>
                    ))}

                    <p className="font-semibold mt-2">Paid Courses</p>
                    {item.paidCourses.subItems.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="block pl-4 py-1 text-sm hover:text-yellow-400"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </details>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar2;
