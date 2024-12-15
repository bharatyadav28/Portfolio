import { personalDetails as details } from "@/lib/data/sidebar";

// Section containing personal details like Address and contact no.
const PersonalInfo = () => {
  return (
    <section
      aria-label="personal info"
      className="flex flex-col bg-dark_bg px-5  pt-8 pb-7 border-b border-foreground"
    >
      {details.map((item) => {
        return (
          <div key={item.title} className=" flex justify-between text-sm mb-1 ">
            <div className="text-foregroundHover font-semibold ">
              {item.title} :
            </div>
            <div className="text-foreground ">{item.value}</div>
          </div>
        );
      })}
    </section>
  );
};

export default PersonalInfo;
