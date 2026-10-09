import ExpandingCard from "@/app/components/expandingcard";
import {
  UserRound,
  Cog,
  CalendarDays,
  Presentation,
  Play,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import MyServices from "@/app/components/myservices";
import BackToTop from "@/app/components/backtotop";

export default function Home() {
  return (
    <div className="min-h-screen w-[97%] ml-2 mt-2 flex flex-col">
      <div className="flex-1 flex flex-col sm:flex-row gap-2 border border-gray-300 rounded-sm items-start">
        {/* Left Div */}
        <div className="w-full sm:w-[60%] ">
          <span className="inline-flex items-center gap-2 ml-2 mt-2">
            <UserRound />
            <h3 className="text-sm font-semibold text-foreground">About me</h3>
          </span>

          <div className="mt-4 w-[96%] ml-2">
            <ExpandingCard
              MainIcon={Cog}
              MainTitle=""
              items={[
                // 1st Item
                {
                  subicon: CalendarDays,
                  subtitle: "Current Affiliations",
                  description: (
                    <>
                      {/* <p className="mt-1.5 mb-2 text-sm font-semibold text-foreground">
                        Senior Software Engineer with 30 years of experience
                        developing business software, ERP systems, and web
                        applications.
                      </p> */}

                      <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
                        {/* Specializes in: */}
                      </p>
                      <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground">
                        <li>
                          • Pi Gamma Mu (PGM) International Honor Society in
                          Social Sciences
                        </li>
                        <li>
                          • Psychological Association of the Philippines (PAP) -
                          Technology and Media Psychology Special Interest Group
                          (TMP SIG)
                        </li>
                        <li>• Google Developer Group (GDG) Davao</li>
                      </ul>
                      {/* <p className="mt-4 mb-1.5 text-sm font-semibold text-foreground">
                        Helps businesses modernize their operations, automate
                        workflows, and build scalable software solutions.
                      </p> */}
                    </>
                  ),
                },
                // 2nd Item
                {
                  subicon: CalendarDays,
                  subtitle: "Student Organizations",
                  description: (
                    <>
                      <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground">
                        <li>• DevelUP Diliman (Game Development, VP)</li>
                        <li>• COPE UP (Mental Health)</li>
                        <li>
                          • College of Social Sciences and Philosophy (CSSP)
                          Student Council (SC) (Dept. Rep.)
                        </li>
                      </ul>
                      {/* <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
                        Computer Science Instructor, Ateneo de Davao University,
                        Davao City, Philippines
                      </p>
                      <p className="mt-4 mb-1.5 text-sm font-semibold text-foreground">
                        Conducts actual classroom instruction designed to
                        achieve course objectives that are aligned with the
                        school&apos;s mission and vision.
                      </p>
                      <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
                        Collaborates with industry, makes project proposals for
                        software development, develops and implements software
                        solutions for various aspects of their operation.
                      </p>
                      <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
                        Mentors students, fostering a collaborative learning
                        environment that promotes innovation and knowledge
                        sharing on various projects with industry partners.
                      </p> */}
                    </>
                  ),
                },
                // 3rd Item
                {
                  subicon: CalendarDays,
                  subtitle: "Academic Honors",
                  description: (
                    <>
                      <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground">
                        <li>• Magna Cum Laude (UPD)</li>
                        <li>• Merit Scholar (DOST)</li>
                        <li>• High Honors (PSHS-DRC/SMC)</li>
                      </ul>
                      {/* <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
                        Youtube Content Creator
                      </p>
                      <p className="mt-4 mb-1.5 text-sm font-semibold text-foreground">
                        Authored Instructional Videos on Odoo Development,
                        History of Computing, Boolean Logic and Circuitverse,
                        Assembly Language Programming, Database Desktop
                        Development using C#, Introduction to Javascript, HTML
                        and CSS.{" "}
                      </p>

                      <p>
                        <span className="font-semibold">Youtube channel:</span>{" "}
                        <a
                          href="https://www.youtube.com/@roytek7667/playlists"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-brand underline underline-offset-4"
                        >
                          <Play className="size-4" aria-hidden />
                          <span>www.youtube.com/@roytek7667/playlists</span>
                        </a>
                      </p> */}
                    </>
                  ),
                },
              ]}
            />
          </div>
        </div>

        {/* Right Div */}
        <div className="w-[97%] mr-2 mt-2 sm:mt-13 sm:w-[38%]">
          <div className="w-[99%] ml-2 mb-1">
            <ExpandingCard
              MainIcon={GraduationCap}
              MainTitle="Education"
              items={[
                {
                  subicon: CalendarDays,
                  subtitle:
                    "Ongoing - Master of Science in Information Technology",
                  description: (
                    <>
                      <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
                        Ateneo de Davao University
                      </p>
                      <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
                        Davao City, Philippines
                      </p>
                    </>
                  ),
                },
                {
                  subicon: CalendarDays,
                  subtitle: "2025 - Bachelor of Science in Psychology",
                  description: (
                    <>
                      <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
                        University of the Philippines Diliman
                      </p>
                      <p className="mt-1.5 mb-1.5 text-sm font-semibold text-foreground">
                        Quezon City, Philippines
                      </p>
                    </>
                  ),
                },
              ]}
            />

            <MyServices />
          </div>
        </div>
      </div>{" "}
      {/* End of Right Div */}
      <footer
        className="mt-4 mb-14 border border-gray-300 
          rounded-sm px-3 py-3 h-10
          text-center text-sm text-slate-500"
      >
        &copy; {new Date().getFullYear()}
      </footer>
      <Link
        href="/"
        className="fixed bottom-2 left-6 z-50 inline-flex
           h-10 items-center justify-center rounded-full 
           bg-blue-500 px-4 py-2 text-sm font-medium text-slate-900 
           shadow-lg transition-colors hover:bg-blue-600
        "
      >
        Home
      </Link>
      <BackToTop />
    </div>
  );
}
