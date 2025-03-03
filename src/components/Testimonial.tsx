import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, TechCorp",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        quote: "This product completely transformed our workflow. Highly recommended!",
    },
    {
        name: "Jane Smith",
        role: "Founder, Creative Studio",
        image: "https://randomuser.me/api/portraits/women/2.jpg",
        quote: "An absolute game-changer! The design and ease of use are unmatched.",
    },
];

export default function Testimonial() {
    return (
        <section className="py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold">What Our Clients Say</h2>
                <p className="mt-2">Hear from those who have worked with us.</p>

                <div className="mt-8 grid gap-6 sm:grid-cols-1 md:grid-cols-2">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="p-6">
                            <CardContent>
                                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                                <div className="flex items-center mt-4">
                                    <Avatar className="w-20 h-20 rounded-lg">
                                        <AvatarImage src={testimonial.image} alt={testimonial.name} className="object-cover" />
                                        <AvatarFallback className="text-2xl">{testimonial.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div className="ml-4">
                                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}