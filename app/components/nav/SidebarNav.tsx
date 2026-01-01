const items = [
  { label: "Brand Strategy", number: "01" },
  { label: "Personality", number: "02" },
  { label: "Logo", number: "03" },
  { label: "Color", number: "04" },
  { label: "Typography", number: "05" },
  { label: "Art Direction", number: "06" },
];

export function SidebarNav() {
  return (
    <nav className="px-[32px] pb-[30px]">
      <ul className="flex flex-col gap-[10px]">
        {items.map((item) => (
          <li key={item.number}>
            <a className="flex items-baseline gap-1 text-[16px] font-medium">
              <span>{item.label}</span>
              <span className="text-[11px] opacity-50">
                {item.number}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
