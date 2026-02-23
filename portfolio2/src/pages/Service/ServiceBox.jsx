/* eslint-disable react/jsx-key */
import { Cable, CircleDashedIcon, LayoutDashboard, LayoutTemplate } from 'lucide-react';





const ServicesData = [
  {
    name: "Web Design&Development",
    description: "Responsive design, SPA, Landing pages, Frontend Maintenance & Support.",
    icon: <LayoutTemplate className="text-4xl" />,
    bgColor: "bg-blue-500/70",
  },
  {
    name: "API intergration",
    description: "RESTful API Integration.",
    icon: <Cable className="text-4xl" />,
    bgColor: "bg-lime-500/70",
  },
  {
    name: "Website Optimization & Performance Enhancement",
    description: "SEO-Friendly Development, Lazy Loading, Memoization.",
    icon: <LayoutDashboard className="text-4xl" />,
    bgColor: "bg-fuchsia-500/70",
  },
  {
    name: "Custom Dashboard & Admin Panel Development",
    description: "Admin Dashboard Development, Analytics Dashboards.",
    icon: <CircleDashedIcon className="text-4xl" />,
    bgColor: "bg-orange-500/70",
  },
];
const ServiceBox = () => {
  return (
    <div className="h-full mt-10 text-white">
      <div className="grid grid-cols-2 gap-6">
        {ServicesData.map(({ name, description, icon, bgColor }) => (
          <div className={`p-3 ${bgColor} min-h-[180px] rounded-xl`}>
            <div className="p-3 space-y-3">
              {icon}
              <h1 className="font-semibold text-black/60">{name}</h1>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceBox;