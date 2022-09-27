import { setRowsFunction, row, rowItem} from "../type/data"

export const addRow = (row:string, setRows:setRowsFunction, rows:row[]) => {
    
    const copyRows = rows
    
    const rowItem1 = {
        color: "grey",
        letter: "a", 
    } as rowItem

    const rowObject = [rowItem1, rowItem1, rowItem1,rowItem1,rowItem1] as row
    
    copyRows.push(rowObject)
    setRows(copyRows)
}