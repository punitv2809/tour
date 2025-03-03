import { ArrowRight } from "lucide-react";

interface Feature {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface Destinations1Props {
  heading?: string;
  description?: string;
  linkUrl?: string;
  linkText?: string;
  features?: Feature[];
}

const Destinations1 = ({
  heading = "Top International Destinations",
  description = "Explore some of the world's most iconic landmarks and vibrant cities. Discover the culture, history, and beauty each destination has to offer.",
  linkUrl = "https://www.globaltravel.com",
  linkText = "Discover More",
  features = [
    {
      id: "feature-1",
      title: "Eiffel Tower, Paris",
      description:
        "Experience the romance and grandeur of Paris with the iconic Eiffel Tower as its centerpiece, offering breathtaking views of the city.",
      image: "int-tour1.png",
    },
    {
      id: "feature-2",
      title: "Wall of Rome",
      description:
        "Discover the ancient walls of Rome, a testament to the city's rich history and enduring legacy. Walk along the remnants of a bygone era.",
      image: "int-tour3.png",
    },
    {
      id: "feature-3",
      title: "Sydney Opera House, Australia",
      description:
        "Admire the striking architecture and cultural vibrancy of Sydney, anchored by the world-renowned Opera House.",
      image: "int-tour2.png",
    },
  ],
}: Destinations1Props) => {
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
          {features[0] && (
            <div className="flex flex-col overflow-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
              <div className="md:min-h-[24rem] lg:min-h-[28rem] xl:min-h-[32rem]">
                <img
                  src={features[0].image}
                  alt={features[0].title}
                  className="aspect-[16/9] h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {features[0].title}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {features[0].description}
                </p>
              </div>
            </div>
          )}
          {features.slice(1).map((feature) => (
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

export { Destinations1 };