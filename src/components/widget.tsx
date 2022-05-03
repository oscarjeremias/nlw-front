import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react";

export function Widget() {
	return (
	<Popover className="absolute bottom-4 right-4">
		
			<Popover.Panel className="m-2">Ola mundo</Popover.Panel>
		<Popover.Button className="h-12 rounded-full bg-brand-500 px-3 text-white flex items-center group">
			<ChatTeardropDots className="w-6 h-6" />
			<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-linear">
				<span className="pl-2">Feedback</span>
			</span>
		</Popover.Button>
	</Popover>
	)
}
