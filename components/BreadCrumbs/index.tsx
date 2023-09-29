import { PathToCrumbs } from "@/Utils/PathToCrumbs";

const crumbs = PathToCrumbs();

export default function BreadCrumbs() {
  return (
    <div className="text-xl flex gap-4">
      {crumbs.map((crumb, index) => (
        <div key={index}>{crumb}</div>
      ))}
    </div>
  );
}
