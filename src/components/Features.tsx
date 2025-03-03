import {
    PlaneTakeoff,
    Globe,
    Users,
    FileText,
    Hotel,
    PhoneCall,
} from "lucide-react";

interface Feature {
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface Feature17Props {
    heading?: string;
    subheading?: string;
    features?: Feature[];
}

const Feature = ({
    heading = "Why Choose Escapenfly?",
    subheading = "Our Services",
    features = [
        {
            title: "Domestic Tours",
            description: "Explore the best destinations across India with curated travel experiences.",
            icon: <PlaneTakeoff className="size-4 md:size-6" />,
        },
        {
            title: "International Tours",
            description: "Discover the world with our exclusive international travel packages.",
            icon: <Globe className="size-4 md:size-6" />,
        },
        {
            title: "Group Tours",
            description: "Plan group travels with ease and make unforgettable memories together.",
            icon: <Users className="size-4 md:size-6" />,
        },
        {
            title: "Visa Assistance",
            description: "Hassle-free visa services for your domestic and international trips.",
            icon: <FileText className="size-4 md:size-6" />,
        },
        {
            title: "Hotel Deals",
            description: "Find the best hotel deals for a comfortable and budget-friendly stay.",
            icon: <Hotel className="size-4 md:size-6" />,
        },
        {
            title: "24/7 Customer Support",
            description: "Reach out anytime for assistance with bookings, queries, and travel advice.",
            icon: <PhoneCall className="size-4 md:size-6" />,
        },
    ],
}: Feature17Props) => {
    return (
        <section className="py-32 p-6">
            <div className="container mx-auto max-w-screen-xl">
                <p className="mb-4 text-xs text-muted-foreground md:pl-5">
                    {subheading}
                </p>
                <h2 className="text-3xl font-medium md:pl-5 lg:text-4xl">{heading}</h2>
                <div className="mx-auto mt-14 grid gap-x-20 gap-y-8 md:grid-cols-2 md:gap-y-6 lg:mt-20">
                    {features.map((feature, idx) => (
                        <div className="flex gap-6 rounded-lg md:block md:p-5" key={idx}>
                            <span className="mb-8 flex size-10 shrink-0 items-center justify-center rounded-full bg-accent md:size-12">
                                {feature.icon}
                            </span>
                            <div>
                                <h3 className="font-medium md:mb-2 md:text-xl">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-muted-foreground md:text-base">
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

export { Feature };