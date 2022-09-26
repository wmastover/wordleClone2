# wordleClone2


application map:

    app.ts

        state contains word and rows

        const submitWord = () => {

            const value = input.value

            for (let i = 0, i < 5, i ++){
                if(value[i] === word[i]) {
                    color = green
                }
                if(word.includes(value[i])) {
                    color = yellow
                } else { color = grey}
                
            }


            // this function should return an arrary of length 5, of objects :
            [{
                color: string
                letter: string
            }]
        }



        -flatlist
            - rows

        -input
        -submit button