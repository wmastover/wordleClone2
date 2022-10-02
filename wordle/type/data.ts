
// declares the type for the data displayed on home screen

export type color = "grey" | "yellow" | "green"

export type letter = "a" |"b" |"c" |"d" |"e" |"f" |"g" |"h" |"i" |"j" |"k" |"l" |"m" |"n" |"o" |"p" |"q" |"r" |"s" |"t" |"u" |"v" |"w" |"x" |"y" |"z"


export type rowItem = {
    color: color
    letter: letter 
}

export type row = Array<rowItem>

export interface ButtonProps {
    addRowFunc: (row:string) => void;
    changeWordleFunc: () => void;
  }
  
export type setRowsFunction =  (row: any) => void
   
