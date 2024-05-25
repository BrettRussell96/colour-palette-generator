import "../styles/PreviewCard.css"

export function PreviewCard({colourEntry, textColour}) {

    return <div className="previewCard" style={{backgroundColor: colourEntry.hex, color: textColour}}>
        <h2>Preview Content Card</h2>
        <h5>{colourEntry.themeName}</h5>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas explicabo numquam ratione eligendi animi, tempora omnis, aspernatur consequatur itaque minima tempore!</p>

        <button>
            Example button
        </button>
    </div>
}