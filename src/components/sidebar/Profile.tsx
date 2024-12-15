import Image from "next/image";

import pic from "../../../public/pic.jpg";
import SocialLinks from "./SocialLinks";

// Sidebar Profile section: Profile Picture, Name, Position, Social Links
const Profile = () => {
  return (
    <section
      aria-labelledby="bharat intro"
      className="bg-light_bg text-white flex flex-col items-center px-12 py-7  "
    >
      <div className="relative h-32 w-32 rounded-full overflow-hidden ">
        <Image
          src={pic}
          alt="Profile Picture"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-full object-cover "
        />
      </div>

      <div className="mt-2 flex flex-col items-center">
        <h3 className="heading">
          Bharat Yadav
          {/* <span className="text-highlight ml-1">Yadav</span> */}
        </h3>
        <p className="text-foreground mt-2 text-sm">Full Stack developer</p>

        <h3 className="text-heading text-lg font-semibold mt-5 ">
          Let&apos;s connect
        </h3>
        <SocialLinks />
      </div>
    </section>
  );
};

export default Profile;
