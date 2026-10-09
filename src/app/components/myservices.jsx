import { BriefcaseBusiness, LucideGraduationCap } from "lucide-react";

export default function MyServices() {
  return (
    <div className="w-auto ml-1 mt-2 border border-gray-300 rounded-lg bg-card p-5 hover:scale-105 transition-transform duration-200">
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="grid size-8 place-items-center rounded-xl bg-brand text-primary-foreground"
        >
          <LucideGraduationCap className="size-5 text-blue-400" />
        </span>
        <h3 className="text-sm font-semibold text-foreground">
          Computing Courses Taken
        </h3>
      </div>

      <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground">
        <li>• Introduction to Computing</li>
        <li>• Computer Programming</li>
        <li>• Data Structures and Algorithms</li>
        <li>• Web Systems and Technologies</li>
        <li>• Computer Networking</li>
        <li>• Enterprise Networking</li>
        <li>• Information Management</li>
        <li>• Information Security Management</li>
        <li>• Seminars in Cybersecurity</li>
        <li>• Data Science and Analytics</li>
      </ul>
    </div>
  );
}
