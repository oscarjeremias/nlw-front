import { Camera,Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "./loading";

interface ScreenShotButtonProps {
	screenShot: string | null,
	setScreenShot: (prop:string | null) => void
}

export function ScreenShotButton({ screenShot, setScreenShot }: ScreenShotButtonProps) {
	const [
		isTakeImgScreenShot,
		setIsTakeImgScreenShot
	] = useState(false)

	async function handleTaxeScreenShot() {
		setIsTakeImgScreenShot(true)
		const canvas = await html2canvas(document.querySelector("html")!)
		const base64img = canvas.toDataURL("image/png")

		setScreenShot(base64img)

		setIsTakeImgScreenShot(false)
	}

	if(screenShot) {
		return (
			<button className="w-12 h-8 p-1 flex justify-end items-end rounded bg-zinc-800 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-zinc-700 focus:ring-brand-500 transition-500"
				style={{
					backgroundImage: `url(${screenShot})`,
					backgroundPosition: "right bottom",
					backgroundSize: "cover",
					backgroundRepeat: "no-repeat"
				}}

				onClick={() => {
					setScreenShot(null)
				}}
		>
				<Trash weight="fill" />
		</button>
		)
	}

	return (
		<button type="button" className="h-8 bg-zinc-800 p-2 flex justify-center items-center rounded hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-700 focus:ring-brand-500 transition-300" 
			onClick={() => handleTaxeScreenShot()}
		>
			{
				isTakeImgScreenShot === true ? <Loading /> : <Camera className="w-6 h-6"/>
			}          
		</button>
	)
}
