# wordleClone2


application map:

    app.ts

        state contains wordle, rows

        const submitWord = () => {

            const value = input.value
            const newRow = []
            const color = string
            for (let i = 0, i < 5, i ++){
                if(value[i] === word[i]) {
                    color = green
                }
                if(word.includes(value[i])) {
                    color = yellow
                } else { color = grey}
                row.push( {
                    color={color}
                    letter={value[i]}
                })

            }


            // this function should return a row object: an arrary of length 5, of objects :
            [{
                color: string
                letter: string
            }]
        }



        -flatlist
            - rows

        -input
        -submit button