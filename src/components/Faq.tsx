import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
    return (
        <section className="py-32 p-6 flex items-center justify-center">
            <div className="container">
                <h1 className="mb-4 text-3xl font-semibold md:mb-11 md:text-5xl">
                    Escapenfly Privacy Policy
                </h1>
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            What is Escapenfly's commitment to privacy?
                        </AccordionTrigger>
                        <AccordionContent>
                            Holiday Triangle Travel Private Limited ("we/ us/ our/ ENF") values the trust which a customer ("you/ your") places in ENF and our website, ESCAPENFLY.com. We uphold the highest standards to ensure transaction security and privacy of customer information.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            How does Escapenfly collect personal data?
                        </AccordionTrigger>
                        <AccordionContent>
                            Personal data includes any information identifying an individual, such as name, email address, contact number, payment information, and IP address. It does not include anonymized data.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            How does Escapenfly use personal data?
                        </AccordionTrigger>
                        <AccordionContent>
                            We use personal information to provide requested services, resolve disputes, troubleshoot problems, prevent fraud, and improve customer experience.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Does Escapenfly share my personal information?
                        </AccordionTrigger>
                        <AccordionContent>
                            We may share your personal information with affiliates, legal authorities, or business partners to enhance services, comply with legal requirements, or prevent fraudulent activities.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            How long does Escapenfly retain personal data?
                        </AccordionTrigger>
                        <AccordionContent>
                            We retain personal data only as long as necessary to fulfill the purposes we collected it for, including legal and security obligations.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            How does Escapenfly use cookies?
                        </AccordionTrigger>
                        <AccordionContent>
                            We use cookies to customize services according to your preferences. Third-party vendors, such as Google, may use cookies for interest-based advertising.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
                <p className="mt-6 text-sm">
                    If you have any questions or concerns, contact our Customer Support Desk at <a href="mailto:enf@escapenfly.com" className="text-blue-500 underline">enf@escapenfly.com</a>.
                </p>
            </div>
        </section>
    );
};

export {Faq};
