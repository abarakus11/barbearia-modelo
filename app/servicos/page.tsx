import { ServicesSection } from "@/components/ServicesSection";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: `Serviços | ${siteConfig.name}`,
};

export default function ServicosPage() {
  return (
    <div className="pt-24">
      <ServicesSection showAllLink={false} />
    </div>
  );
}
