import { CloseButton } from "../closeButton";
import { Cloud,Lightbulb,Bug } from "phosphor-react";
import { feedBackTypes } from "../widgetForm";

interface TypesProps {
	setSelectFeedBack: (feedBackTypes: string) => void
}

export function SelectFeedBack({ setSelectFeedBack }: TypesProps) {
	return (
		<>
			<header>
				<span className="text-xl loading-6">Deixe o seu Feedback
				</span> 
				<CloseButton />
			</header>
					<div className="min-w-full m-8 p-4 flex justify-between items-center gap-2"> 
						<button className="min-h-full w-1/3 text-center bg-zinc-800 rounded-xl py-8 flex flex-col justify-center items-center hover:border border-[#684AAA] focus:border focus:border-[#684AAA] focus-outline-none" onClick={() => {
							setSelectFeedBack(feedBackTypes.bug.title)
							}}>
					<Bug weight="fill" className="text-[#684AAA] w-8 h-10"/> 
								<span className="m-2">{feedBackTypes.bug.title}
							</span>
						</button>
						<button className="min-h-full w-1/3 text-center bg-zinc-800 rounded-xl py-8 flex flex-col justify-center items-center hover:border border-[#684AAA] focus:border focus:border-[#684AAA] focus:outline-none" onClick={() => {
							setSelectFeedBack(feedBackTypes.ideia.title)
							}}>
						<Lightbulb weight="fill" className="text-[#F9D57D] w-8 h-10"/>
							<span className="m-2">{feedBackTypes.ideia.title}
							</span>
						</button>
						<button className="min-h-full w-1/3 text-center bg-zinc-800 rounded-xl py-8 flex flex-col justify-center items-center hover:border border-[#684AAA] focus:border focus:border-[#684AAA] focus:outline-none" onClick={() => {
							setSelectFeedBack(feedBackTypes.outros.title)
							}}>
						<Cloud weight="fill" className="text-[#83BFF3] w-8 h-10"/>
						<span className="m-2">{feedBackTypes.outros.title}
						</span>
					</button>
							</div>
		</>
	)
 }
