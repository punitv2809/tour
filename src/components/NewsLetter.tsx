import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";

interface NewsletterProps {
heading?: string;
description?: string;
}

const Newsletter = ({
heading = "Subscribe to Our Newsletter",
description = "Get the latest travel deals, tips, and updates delivered straight to your inbox.",
}: NewsletterProps) => {
return (
<section className="py-32 p-3 flex items-center justify-center">
    <div className="container">
        <div className="flex flex-col items-center rounded-lg p-8 text-center md:rounded-xl lg:p-16 border">
            <h3 className="mb-3 max-w-3xl text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                {heading}
            </h3>
            <p className="mb-8 max-w-3xl text-muted-foreground lg:text-lg">
                {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
                <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:flex-1" />
                <Button className="w-full sm:w-auto">
                    Subscribe
                </Button>
            </div>
        </div>
    </div>
</section>
);
};

export { Newsletter };