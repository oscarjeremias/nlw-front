import { CloseButton } from "../closeButton";
import { CheckSquare } from "phosphor-react"

interface SucessFeedBackProps {
	setSelectFeedBack: (prop:string) => void,
	setFeedBackSent: (prop:boolean) => void
}

export function SucessFeedBack({ setSelectFeedBack,setFeedBackSent }: SucessFeedBackProps) {
	return (
		<>
		<header>
			<CloseButton />
		</header>

			<div className="min-w-full px-4 py-12 flex flex-col justify-center items-center gap-3">
				<div className="w-10 h-10 flex justify-center items-center bg-white rounded">
					<CheckSquare weight="fill" className="w-12 h-12 text-[#1DC509] absolute" /></div>
				<span className="text-xl font-bold ">Agradecemos o feedback!</span>
				<button className="px-16 py-4 text-zinc-100 bg-zinc-800 hover:bg-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-700 focus:ring-brand-500 transition-300" onClick={() => {
					setSelectFeedBack("")
					setFeedBackSent(false)
					}}>
					Quero fazer outro
				</button>
			</div>
		</>
		
	)
}
