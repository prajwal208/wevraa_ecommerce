import SelectBoutiquesHeader from "@/components/SelectBoutiquesHeader";
import ProfileBlock from "@/components/ProfileBlock";
import OrderTypeSelect from "@/components/OrderTypeSelect";
import SelectedImages from "@/components/SelectedImages";
import MeasurementAddonsRows from "@/components/MeasurementAddonsRows";
import AllBoutiques from "@/components/AllBoutiques";
import BottomNav from "@/components/BottomNav";
import {
  userProfile,
  orderTypes,
  selectedImages,
  boutiques,
} from "@/data/dummy";

export default function SelectBoutiquesPage() {
  return (
    <>
      <SelectBoutiquesHeader />
      <main className="main-with-bottom-nav">
        <ProfileBlock profile={userProfile} />
        <OrderTypeSelect types={orderTypes} />
        <SelectedImages images={selectedImages} />
        <MeasurementAddonsRows />
        <AllBoutiques boutiques={boutiques} compact />
      </main>
      <BottomNav />
    </>
  );
}
