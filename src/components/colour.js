
export function ColourBlock({colourEntry}){

	return(
		<div className="colourBlock" style={{backgroundColor: colourEntry.hex}}>
			<h2>{colourEntry.hex}</h2>
			<h4>{colourEntry.themeName + "-" + colourEntry.strength}</h4>
		</div>
	)
}