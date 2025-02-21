import { Separator } from "@/components/ui/separator";

export default function SectionTitle({text}:{text:string}) {
  return (
    <div>
      <h2 className="font-medium text-2xl mb-8 capitalize tracking-wider "> {text}</h2>
      <Separator/>
    </div>
  )
}