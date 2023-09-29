const currentRoute = ["home", "case-study", "scout"];

export default function BreadCrumbs() {
  return (
    <div className="text-xl flex gap-2">
      {currentRoute.map((slug, index) => (
        <>
          <div key={index}>{slug}</div>
          {index != currentRoute.length - 1 && <div>/</div>}
        </>
      ))}
    </div>
  );
}
