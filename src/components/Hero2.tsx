import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Testimonial {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatars: Array<{
        image: string;
        fallback: string;
    }>;
}

interface Hero151Props {
    heading?: string;
    description?: string;
    button?: {
        text: string;
        url: string;
    };
    testimonial?: Testimonial;
    images: {
        first: string;
        second: string;
        third: string;
        fourth: string;
    };
}

const Hero2 = ({
    heading = "Escapenfly - Your Trusted Tour Operator",
    description =
        "Escapenfly is an India-based tour operator providing comprehensive ground handling services for B2B, B2C & MICE markets worldwide. We organize travel for FIT clients, groups, and corporates with dedicated on-ground support.",
    button = {
        text: "Learn More",
        url: "#",
    },
    testimonial = {
        quote: "One Stop Solution for all your travel needs!",
        author: "Escapenfly Team",
        role: "Experts in Travel",
        company: "Escapenfly",
        avatars: [
            { image: "https://shadcnblocks.com/images/block/avatar-1.webp", fallback: "E" },
            { image: "https://shadcnblocks.com/images/block/avatar-2.webp", fallback: "T" },
            { image: "https://shadcnblocks.com/images/block/avatar-3.webp", fallback: "O" },
        ],
    },
    images = {
        first: "tour2.png",
        second: "tour6.png",
        third: "tour4.png",
        fourth: "tour5.png",
    },
}: Hero151Props) => {
    return (
        <section className="py-12 md:py-20 p-6 flex flex-col items-center justify-center">
            <div className="container">
                <div className="flex flex-col items-center gap-8 md:flex-row">
                    <div className="flex-1">
                        <div className="flex flex-col gap-4 lg:gap-8">
                            <h1 className="max-w-[80%] text-4xl leading-tight font-semibold text-foreground lg:text-5xl xl:text-7xl">
                                {heading}
                            </h1>
                            <p className="text-lg leading-relaxed text-muted-foreground xl:text-2xl">
                                {description}
                            </p>
                        </div>
                        <div className="my-6 lg:my-10">
                            <Button asChild size="lg">
                                <a href={button.url}>{button.text}</a>
                            </Button>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <div className="relative flex -space-x-[1.5rem]">
                                {testimonial.avatars.map((avatar, index) => (
                                    <Avatar
                                        key={index}
                                        className={`relative z-${index + 1}0 flex h-12 w-12 flex-shrink-0 rounded-full border-2 border-white object-cover`}
                                    >
                                        <AvatarImage src={avatar.image} alt="" />
                                        <AvatarFallback>{avatar.fallback}</AvatarFallback>
                                    </Avatar>
                                ))}
                            </div>
                            <div>
                                <p className="mb-1 text-sm text-muted-2-foreground italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <p className="text-sm font-medium text-muted-2-foreground">
                                    {testimonial.author}, {testimonial.role} @ {testimonial.company}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex-1">
                        <div className="w-full max-w-[50rem]">
                            <AspectRatio ratio={1 / 1} className="h-full w-full">
                                <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-[3.5%]">
                                    <div className="overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                                        <img
                                            src={images.first}
                                            alt=""
                                            className="object-fit h-full w-full object-center"
                                        />
                                    </div>
                                    <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                                        <div className="absolute top-1/2 left-[5%] w-[110%] max-w-[25rem] -translate-y-1/2 overflow-hidden rounded-md">
                                            <AspectRatio ratio={1.739130435 / 1}>
                                                <img
                                                    src={images.second}
                                                    alt=""
                                                    className="size-full object-cover object-center"
                                                />
                                            </AspectRatio>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                                        <div className="absolute top-[9%] left-[9%] w-[200%] max-w-[37.5rem] overflow-hidden rounded-md">
                                            <AspectRatio ratio={1.6 / 1}>
                                                <img
                                                    src={images.third}
                                                    alt=""
                                                    className="size-full object-cover object-center"
                                                />
                                            </AspectRatio>
                                        </div>
                                    </div>
                                    <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                                        <div className="relative top-[12%] left-[50%] w-[70%] max-w-[17.5rem] -translate-x-[50%]">
                                            <AspectRatio ratio={0.52 / 1}>
                                                <img
                                                    src="https://shadcnblocks.com/images/block/mockups/phone-1.png"
                                                    alt=""
                                                    className="absolute z-20 w-full"
                                                />
                                                <img
                                                    src={images.fourth}
                                                    alt=""
                                                    className="absolute z-10 w-full rounded-[16%]"
                                                />
                                            </AspectRatio>
                                        </div>
                                    </div>
                                </div>
                            </AspectRatio>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Hero2 };
