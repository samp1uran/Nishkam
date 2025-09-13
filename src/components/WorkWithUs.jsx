import { NavLink } from "react-router-dom";
const skills = [
  {
    title: "Certifications in networking & Infrastructure",
  },
  {
    title: "Computer Hardware & Software:",
    desc: "Understanding of PC and Mac hardware components, operating systems (Windows, macOS, Linux), and troubleshooting techniques. Ability to diagnose hardware issues with desktops, laptops, and peripherals (printers, scanners, etc.) and coordinate with vendors for repairs.",
  },
  {
    title: "Networking:",
    desc: "Basic understanding of networking (TCP/IP, LAN, WAN), routers, switches, firewalls, and VPNs, since small businesses may need internal network setup and maintenance.",
  },
  {
    title: "Data Security, Backup Recovery:",
    desc: "Knowledge of best practices in cybersecurity (anti-virus, firewalls, encryption) and backup systems (cloud backups, on-site solutions).",
  },
  {
    title: "Operating Systems Support:",
    desc: "Proficient in managing and troubleshooting operating systems like Windows 10/11, macOS, and even Linux. Knowledge of Active Directory and file-sharing protocols is useful.",
  },
  {
    title: "Database Management:",
    desc: "Familiarity with database management systems used by practice management software, such as SQL or MySQL, to troubleshoot and maintain data integrity.",
  },
];
const WorkWithUs = () => {

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative h-64 bg-no-repeat md:bg-fixed bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://i.shgcdn.com/6ed97794-6d1a-43a7-b2a0-ff32a0e05e1b/-/format/auto/-/preview/3000x3000/-/quality/lighter/')", // Replace with actual image URL
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-3xl font-bold z-10">
          Work With Us
        </h1>
        <div className="absolute bottom-18 text-white text-sm z-10">
          <NavLink
            to='/'
            className="hover:text-green-500 cursor-pointer transition-normal duration-200"
          >
            Home
          </NavLink>{" "}
          &gt;{" "}
          <span className="hover:text-green-500 cursor-pointer transition-normal duration-200">
            Work With Us
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-1">
        {/* Left Content */}
        <div className="max-w-3xl mx-auto p-3">
          <h2 className="text-3xl font-bold mb-6">Current Openings:</h2>

          <ol className="list-decimal ml-4 list-outside pl-6 space-y-6">
            <li>
              <span className="font-bold">IT Specialist:</span>

              <div className="mt-4 space-y-4">
                <p>
                  <span>Qualification:</span> Bachelor’s Degree in Computer
                  Science
                </p>
                <p>
                  <span>Experience:</span> Minimum 2 Years
                </p>
              </div>
            </li>
          </ol>
          <div className="my-6">
            <p className="italic my-4">Skill Required:</p>

            <ul className="ml-4 list-disc list-outside pl-6 space-y-3">
              {skills.map((s, i) => (
                <li key={i}>
                  <span className="font-bold">{s.title}</span>
                  {s.desc && <span> {s.desc}</span>}
                </li>
              ))}
            </ul>

            <p className="font-bold mt-6">
              Interested candidates may send their CVs at{" "}
              <a href="mailto:hr@nishkam.in" className="underline">
                hr@nishkam.in
              </a>{" "}
              or contact at 95xxxxxxxx
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-start">
          <img
            src="https://img.freepik.com/free-photo/colleagues-giving-fist-bump_53876-13530.jpg?semt=ais_hybrid&w=740&q=80" // Replace with actual image URL
            alt="Discussion"
            className="rounded-lg shadow-2xl w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
