import AddonsHeader from "@/components/AddonsHeader";
import AddonsForm from "@/components/AddonsForm";
import BottomNav from "@/components/BottomNav";

export default function AddonsPage() {
  return (
    <>
      <AddonsHeader />
      <main className="main-with-bottom-nav">
        <AddonsForm />
      </main>
      <BottomNav />
    </>
  );
}
