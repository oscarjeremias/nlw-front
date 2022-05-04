import { Cloud,Lightbulb,Bug,ArrowLeft } from "phosphor-react";
import { CloseButton } from "../closeButton";
import { ScreenShotButton } from "../screenShotButton";
import { useState,FormEvent } from "react";

interface TypesProps {
	selectFeedBack: string
	setSelectFeedBack: (prop:string) => void
	setFeedBackSent: (prop:boolean) => void
}

export function ContentFeedBack({ selectFeedBack,setSelectFeedBack,setFeedBackSent}: TypesProps) {
	const [screenShot,setScreenShot] = useState<string | null>(null)
	const [commit,setCommit] = useState("")

	function handleCommit(event:FormEvent) {
		event.preventDefault()

		console.log({
			screenShot,
			commit
		})
		setFeedBackSent(true)
	}
	return (
		<>
			<header>
				<button className="absolute top-7 left-5 text-zinc-400 hover:text-zinc-100" onClick={() => {
					setSelectFeedBack("")
					}}>
					<ArrowLeft weight="bold" className="w-6 h-6" />
				</button>
				<span className="text-xl loading-6 flex justify-center items-center gap-2">
					{
						selectFeedBack === "Problema" ? <Bug weight="fill" className="text-[#684AAA]" /> : selectFeedBack === "Ideia" ? <Lightbulb weight="fill" className="text-[#F9D57D]" /> : <Cloud weight="fill" className="text-[#83BFF3]" />
					}
					<span>{selectFeedBack}</span>
				</span>
				<CloseButton />
			</header>
				<form onSubmit={handleCommit} className="w-full flex flex-col justify-center my-8  gap-8 p-4">
					<textarea className="m-w-full  min-h-[150px] bg-transparent border border-zinc-800 focus:ring-1 focus:ring-[#684AAA] focus:outline-none p-2 rounded resize-none scrollbar scrollbar-thunb-zinc-700 scrollbar-track-transparent scrollbar-thin" placeholder="Deixe aqui o teu feedback" onChange={(event) => setCommit(event?.target.value)}>
					</textarea>
					<div className="flex gap-2">
						<ScreenShotButton screenShot={screenShot} setScreenShot={setScreenShot} />
						<button type="submit" className="w-full h-8 bg-brand-500 text-white rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-700 focus:ring-brand-500 hover:bg-brand-300 transition-300 disabled:opacity-50" disabled={commit.length === 0}>Enviar feedback</button>
					</div>
				</form>
		</>
	)
}
