import { ProductsSection } from "@/components/ProductsSection";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: `Produtos | ${siteConfig.name}`,
};

export default function ProdutosPage() {
  return (
    <div className="pt-24">
      <ProductsSection showAllLink={false} />
    </div>
  );
}
