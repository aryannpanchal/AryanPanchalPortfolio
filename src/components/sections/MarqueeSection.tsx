import Marquee from "react-fast-marquee";

export function MarqueeSection() {
  const languages = [
    "TS",
    "MongoDB",
    "Python",
    "Firebase",
    "React",
    "Docker",
    "Express",
    "Tailwind",
    "PostgreSQL",
    "Nodejs",
    "Shopify",
    "Git",
    "Figma",
  ];

  return (
    
    <div className="bg-primary my-16">
    {/* <p className='font-semibold text-center laptop:text-4xl pb-12 mobile:pt-14 laptop:pt-0 mobile:text-2xl text-white'>Tech stack I have worked with</p> */}
      <div
        className="flex-row w-max flex"
        style={{ transform: "rotate(4deg)" }}
      >
      </div>
      <div className="relative mt-6 overflow-hidden">
        <Marquee speed={80} direction="right">
          {languages.map((logo, idx) => (
            <img
              key={idx}
              src={`/languages/${logo}.png`}
              className="h-10 [margin:var(--gap)] grayscale px-4"
              alt={`logo-${logo}`}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}