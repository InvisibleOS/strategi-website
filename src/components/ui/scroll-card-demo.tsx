import { ScrollCardStack, type ScrollCardItem } from "@/components/ui/scroll-card";

const cards: ScrollCardItem[] = [
  { index: "01", eyebrow: "Step", title: "First.", description: "Each card pins to the centre as you scroll." },
  { index: "02", eyebrow: "Step", title: "Second.", description: "The next card stacks over the last, slightly rotated." },
  { index: "03", eyebrow: "Step", title: "Third.", description: "A sticky side note can stay put while the cards swap." },
];

function ScrollCardDemo() {
  return (
    <div className="bg-[#050505] px-6 md:px-12">
      <ScrollCardStack
        cards={cards}
        side={<h3 className="text-4xl font-bold tracking-tighter text-white">What we<br />build.</h3>}
      />
    </div>
  );
}

export { ScrollCardDemo as DemoOne };
