import ProfilePageHeader from "@/components/ProfilePageHeader";
import ProfileSection from "@/components/ProfileSection";
import BottomNav from "@/components/BottomNav";
import { userProfile } from "@/data/dummy";

export default function ProfilePage() {
  return (
    <>
      <ProfilePageHeader />
      <main className="main-with-bottom-nav">
        <ProfileSection profile={userProfile} />
      </main>
      <BottomNav />
    </>
  );
}
