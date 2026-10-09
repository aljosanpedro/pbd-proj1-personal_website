import { BriefcaseBusiness } from "lucide-react";

export default function MyServices() {
  return (
    <div className="w-auto ml-1 mt-2 border border-gray-300 rounded-lg bg-card p-5 hover:scale-105 transition-transform duration-200">
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className="grid size-8 place-items-center rounded-xl bg-brand text-primary-foreground"
        >
          <BriefcaseBusiness className="size-5 text-blue-400" />
        </span>
        <h3 className="text-sm font-semibold text-foreground">My Services</h3>
      </div>

      <ul className="mt-4 space-y-2 text-sm font-semibold text-foreground">
        <li>✔ Odoo Development and Customization</li>
        <li>✔ Odoo Installation (On-Premise and Cloud)</li>
        <li>✔ Legacy System Modernization (C#, Delphi to Web)</li>
        <li>✔ Fullstack Web Development (React, NextJS)</li>
        <li>✔ Database Design and Optimization</li>
        <li>✔ API Development and Integration</li>
        <li>✔ ERP Implementation for Medium and Small Businesses</li>
        <li>
          ✔ Technical Support & Training for Software Systems, CRM,Automation &
          AI assisted Work Tools
        </li>
        <li>✔ Linux Server Deployment</li>
      </ul>
    </div>
  );
}
