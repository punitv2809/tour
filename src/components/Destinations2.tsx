import { ArrowRight } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Feature72Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

const Destinations2 = ({
  heading = "Top Indian Destinations",
  description = "Explore the breathtaking landscapes, rich culture, and historic landmarks of India. Plan your next adventure now!",
  linkUrl = "https://www.incredibleindia.org",
  linkText = "Explore Now",
  features = [
    {
      id: "feature-1",
      title: "Taj Mahal, Agra",
      description:
        "One of the Seven Wonders of the World, the Taj Mahal is a stunning white marble mausoleum and a symbol of eternal love.",
      image: "dom-tour4.png",
    },
    {
      id: "feature-2",
      title: "Jaipur, Rajasthan",
      description:
        "The Pink City is famous for its royal palaces, vibrant markets, and the stunning Hawa Mahal.",
      image: "dom-tour3.png",
    },
    {
      id: "feature-3",
      title: "Kerala Backwaters",
      description:
        "Experience serenity as you cruise through Kerala's tranquil backwaters on a houseboat.",
      image: "dom-tour1.png",
    },
    {
      id: "feature-4",
      title: "Varanasi, Uttar Pradesh",
      description:
        "One of the world's oldest cities, Varanasi is a spiritual hub with its sacred Ganges River and mesmerizing evening aartis.",
      image: "dom-tour6.png",
    },
  ],
}: Feature72Props) => {
  return (
    <section className="py-32 flex flex-col items-center justify-center px-6">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-lg">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            {heading}
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">{description}</p>
          <a
            href={linkUrl}
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            {linkText}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col overflow-clip rounded-xl border border-border"
            >
              <div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Destinations2 };
