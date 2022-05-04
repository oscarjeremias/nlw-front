import { SelectFeedBack } from "./feedBackStepes/selectFeedBack";
import { ContentFeedBack } from "./feedBackStepes/contentFeedBack";
import { SucessFeedBack } from "./feedBackStepes/sucessFeedBack";
import { useState } from "react";

interface FeedBackTypes {
	bug: {
		title: string
	},
	ideia: {
		title: string
	},
	outros: {
		title: string
	}
}

export const feedBackTypes: FeedBackTypes = {
	bug: {
		title: "Problema"
	},
	ideia: {
		title: "Ideia"
	},
	outros: {
		title: "Outros"
	},
}

export function WidgetForm() {

	const [selectFeedBack,setSelectFeedBack] = useState<string>("")
	const [feedBackSent,setFeedBackSent] = useState<boolean>(false)

	return (
		<div className="bg-zinc-900 p-4 my-4 rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
			{
				feedBackSent === true ? <SucessFeedBack
				setSelectFeedBack={setSelectFeedBack} setFeedBackSent={setFeedBackSent}/> : selectFeedBack === "" ? <SelectFeedBack setSelectFeedBack={setSelectFeedBack} /> : <ContentFeedBack setSelectFeedBack={setSelectFeedBack} selectFeedBack={selectFeedBack} setFeedBackSent={setFeedBackSent} />

			}
			<footer className="text-xs text-neutral-400">
				Feito com amor ♡ <a href="https://github.com/oscarjeremias" target="_blank" className="underline underline-offset-2 ">oscarjeremias</a>
			</footer>
		</div>
	)
}
