import { notFound } from "next/navigation";
import ProductDetailHeader from "@/components/ProductDetailHeader";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import ProductDetailInfo from "@/components/ProductDetailInfo";
import ProductDetailActions from "@/components/ProductDetailActions";
import ProductTabs from "@/components/ProductTabs";
import ProductRecommendations from "@/components/ProductRecommendations";
import BottomNav from "@/components/BottomNav";
import { getProductDetail, getCompleteTheLookAndSimilar } from "@/data/dummy";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductDetail(id);
  if (!product) notFound();

  const { completeTheLook, similarStyles } = getCompleteTheLookAndSimilar(id);

  return (
    <>
      <ProductDetailHeader />
      <main className="main-with-bottom-nav">
        <ProductImageCarousel images={product.images} alt={product.alt} />
        <ProductDetailInfo brand={product.brand} price={product.price} />
        <ProductDetailActions />
        <ProductTabs
          details={product.details}
          fitFabric={product.fitFabric}
          shippingReturn={product.shippingReturn}
        />
        <ProductRecommendations
          title="Complete The Look"
          products={completeTheLook}
          showShortDescription
        />
        <ProductRecommendations
          title="Similar Styles"
          products={similarStyles}
          showShortDescription
        />
      </main>
      <BottomNav />
    </>
  );
}
