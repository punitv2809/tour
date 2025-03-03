import { Input } from './ui/input';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { LucidePlane } from 'lucide-react';

const ContactForm = () => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-12 h-full">
                {/* Form Section */}
                <div className="col-span-12 md:col-span-4 flex flex-col gap-4 mx-0 md:mx-2">
                    <div className="flex flex-col gap-2 mb-6">
                        <p className="font-bold text-3xl font-garamond">Contact Us</p>
                        <p className="text-sm text-justify">
                            Whether you have a question about our destinations, need travel advice, or want to plan your next adventure, our team is here to help. Reach out and we'll get back to you promptly.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Input type="text" id="firstName" placeholder="First Name" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Input type="text" id="lastName" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Input type="email" id="email" placeholder="Email" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Input type="tel" id="phone" placeholder="Phone" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Textarea rows={8} placeholder="How can we help you?" />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <Button>Submit</Button>
                    </div>
                </div>
                {/* Image & Overlay Section */}
                <div className="col-span-8 hidden md:block p-3">
                    <div className="relative rounded-md h-full">
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-[url('/dom-tour4.png')] bg-cover bg-center rounded-md"></div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 rounded-md"></div>
                        {/* Overlay Content */}
                        <div className="absolute text-white z-50 p-3 flex flex-col justify-end h-full w-full">
                            <div className="glass shadow-md p-3 rounded-md border border-b-0 border-x-0 border-t-white/50">
                                <p className="text-3xl mb-1 font-garamond">Ready for Your Next Adventure?</p>
                                <p className="text-sm">
                                    Let us help you create unforgettable travel memories. Your journey starts here.
                                </p>
                                <div className="flex font-medium items-center justify-end gap-2 mt-3">
                                    <LucidePlane size={15} />
                                    <p>Escape &amp; Fly</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
