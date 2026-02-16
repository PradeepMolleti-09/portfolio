import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const items = [
    {
        id: "01",
        title: "Who am I?",
        content:
            "I'm Pradeep Molleti — a MERN Stack Developer and Systems Architect dedicated to building scalable, user-centric digital products that blend performance with high-end aesthetics.",
    },
    {
        id: "02",
        title: "Product Vision",
        content:
            "I engineering cloud-native applications using MongoDB, Express, React, and Node.js. My focus is on writing clean, efficient code that powers seamless user journeys.",
    },
    {
        id: "03",
        title: "Core Philosophy",
        content:
            "I believe in the 'First Principles' approach to development—breaking down complex systems to their core components to build more robust and maintainable software.",
    },
    {
        id: "04",
        title: "Strategic Impact",
        content:
            "From database optimization to pixel-perfect frontends, I bridge the gap between business requirements and technical implementation to deliver measurable value.",
    },
    {
        id: "05",
        title: "Tech Stack",
        content:
            "Specialized in the MERN ecosystem, I leverage modern tooling like TypeScript, Tailwind CSS, and GSAP to create interactive, high-performance web applications.",
    },
    {
        id: "06",
        title: "Let's Connect",
        content:
            "Ready to build something impactful? Reach out to me at pradeepmolleti09@gmail.com for collaborations, opportunities, or just a technical chat.",
    },
];

export function Accordion05() {
    return (
        <div className="w-full">
            <Accordion type="single" defaultValue="01" collapsible className="w-full">
                {items.map((item) => (
                    <AccordionItem
                        value={item.id}
                        key={item.id}
                        className="border-b border-white/20"
                    >
                        <AccordionTrigger className="text-left pl-0 py-5 md:py-6 overflow-hidden text-white/30 transition-all duration-300 hover:no-underline cursor-pointer data-[state=open]:text-primary [&>svg]:hidden group">
                            <div className="flex items-start gap-3 md:gap-4 w-full">
                                <span className="text-xs md:text-sm font-light pt-2 md:pt-3 min-w-[24px] text-white/40">
                                    {item.id}
                                </span>
                                <h2 className="uppercase text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none">
                                    {item.title}
                                </h2>
                            </div>
                        </AccordionTrigger>

                        <AccordionContent className="text-white/70 pb-6 md:pb-8 pl-11 md:pl-14 pr-4 md:pr-8 text-sm md:text-base leading-relaxed">
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}
