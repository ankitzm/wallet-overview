import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function Accordions() {
    return (
        <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
            <AccordionItem value="item-1">
                <AccordionTrigger>Wallet Token</AccordionTrigger>
                <AccordionContent>
                    Ywallet  token
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Staking</AccordionTrigger>
                <AccordionContent>
                    Staking
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Debt</AccordionTrigger>
                <AccordionContent>
                    Li
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>NFT</AccordionTrigger>
                <AccordionContent>
                    Li
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default Accordions