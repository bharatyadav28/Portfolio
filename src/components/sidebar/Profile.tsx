import Image from "next/image";

import pic from "../../../public/pic.jpg";
import SocialLinks from "./SocialLinks";

// Sidebar Profile section: Profile Picture, Name, Position, Social Links
const Profile = () => {
  return (
    <section
      aria-labelledby="bharat intro"
      className="flex flex-col items-center px-8 py-10 border-b border-border"
    >
      <div className="relative h-36 w-36 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-md mb-4 bg-background">
        <Image
          src={pic}
          alt="Profile Picture"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-full object-cover"
        />
      </div>

      <div className="mt-2 flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold tracking-tight text-foreground">
          Bharat Yadav
        </h3>
        <p className="text-muted-foreground mt-2 text-sm font-medium tracking-wide uppercase">
          Full Stack Developer
        </p>

        <h3 className="text-foreground text-sm font-semibold mt-6 mb-3">
          Let&apos;s connect
        </h3>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Profile;
