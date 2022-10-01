import { setRowsFunction, row, rowItem, letter} from "../type/data"

const getColor = (wordle: Array<string>, char:string, charIndex:number):string => {
    
    if (wordle[charIndex] === char) {
        return("green")
    } else if ( wordle.includes(char)) {
        return("yellow")
    } else {
        return("white")
    }

}




export const addRow = (wordle: Array<string>, row:string, setRows:setRowsFunction, rows:row[]) => {
    
    const copyRows = rows as row[]
    // object containing rowItems
    const rowObject = [] as row
 
    let winCounter = 0
    //for each letter in string, create row item
    //color logic hasnt yet been created
    for (let i = 0; i < 5; i++) {

        const char = row.charAt(i).toLowerCase() as letter
        const color = getColor(wordle, char, i )

        if (color === "green") { winCounter++}

        const rowItem = {
            color: color,
            letter: char,
        } as rowItem


        rowObject.push(rowItem)
    }
    // this doesnt work syntax is important otherwise useEffect doesnt run

    setRows([...copyRows, rowObject] )

    if (winCounter === 5) { alert("winner, winner, chicken diner")}
}