// used to truncate long sentences 
export function truncateMiddle(word,documentselect) {
    // Width of font according to font size and style
    const fontwidth =getTextWidth(word,getCanvasFontSize(documentselect));
    // Total container width
    const containerwidth = Number((getComputedStyle(documentselect).width).replace("px",""));  
    // Width occupied by logo
    const logowidth = Number(getComputedStyle(document.getElementsByClassName("imagelogo")[0]).width.replace("px","")); 
    // Count of limit of char for truncation according to width of div 
    const tooLongChars=(( word.length/ fontwidth) * (containerwidth-logowidth));
    
    if (word.length < tooLongChars) {
        return word;
    }
    const ellipsis = '...';
    const charsOnEitherSide = Math.floor(tooLongChars / 2) - ellipsis.length;
    return word.slice(0, charsOnEitherSide) + ellipsis + word.slice(-charsOnEitherSide);
} 

// function to return the width of font
function getTextWidth(text, font) {
    const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    const context = canvas.getContext("2d");
    context.font = font;
    const metrics = context.measureText(text);
    return metrics.width;
}

// Get the desire style of the font
function getCssStyle(element, prop) {
    return window.getComputedStyle(element, null).getPropertyValue(prop);
}

// Get the Style of given element
function getCanvasFontSize(elemennt) {
    const fontWeight = getCssStyle(elemennt, 'font-weight');
    const fontSize = getCssStyle(elemennt, 'font-size');
    const fontFamily = getCssStyle(elemennt, 'font-family');
    return `${fontWeight} ${fontSize} ${fontFamily}`;
}

