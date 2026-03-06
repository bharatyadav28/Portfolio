import { personalDetails as details } from "@/lib/data/sidebar";

// Section containing personal details like Address and contact no.
const PersonalInfo = () => {
  return (
    <section
      aria-label="personal info"
      className="flex flex-col px-6 pt-8 pb-7 border-b border-border gap-4"
    >
      {details.map((item) => {
        return (
          <div key={item.title} className="flex flex-col text-sm items-start gap-1">
            <div className="text-muted-foreground font-semibold tracking-wide shrink-0">
              {item.title} :
            </div>
            <div className="text-foreground font-medium break-words">
              {item.value}
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PersonalInfo;
