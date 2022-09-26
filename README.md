# wordleClone2


application map:

    app.ts

        state contains word and rows

        submitWord = () => {

            const value = input.value

            for (let i = 0, i < 5, i ++){
                if(value[i] === word[i]) {
                    color = green
                }
                if(word.includes(value[i])) {
                    color = yellow
                } else { color = grey}
                
            }
        }



        -flatlist
            - rows

        -input
        -submit button