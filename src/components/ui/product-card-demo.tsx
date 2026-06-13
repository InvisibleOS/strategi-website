import { ProductHighlightCard } from "@/components/ui/product-card";
import { CircuitBoard } from "lucide-react";

export default function ProductHighlightCardDemo() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background p-8">
      <ProductHighlightCard
        category="Electronic"
        categoryIcon={<CircuitBoard className="h-5 w-5" />}
        title="Connectors"
        description="Fast charging and reliable connection for all your devices. Compact, durable, and ready for everyday use."
        imageSrc="https://images.unsplash.com/photo-1498049794561-7780e7231661?auto=format&fit=crop&w=320&q=80"
        imageAlt="Electronic circuit board"
      />
    </div>
  );
}
