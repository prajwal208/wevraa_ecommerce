import SelectSleeveDesignHeader from "@/components/SelectSleeveDesignHeader";
import SelectSleeveDesignContent from "@/components/SelectSleeveDesignContent";
import BottomNav from "@/components/BottomNav";

export default function SelectSleeveDesignPage() {
  return (
    <>
      <SelectSleeveDesignHeader />
      <main className="main-with-bottom-nav">
        <SelectSleeveDesignContent />
      </main>
      <BottomNav />
    </>
  );
}
