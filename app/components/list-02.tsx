import Heading02 from "./heading-02";

export function List02({ number, title }: { number: string; title: string }) {
  return (
    <li className="flex gap-1">
      <Heading02>
        <span className="tabular-nums text-black/40">{number}</span>
        <span>{title}</span>
      </Heading02>
    </li>
  );
}
