const KmInput = document.getElementById('Km-input');
const ageSelect = document.getElementById('age-input');


const submitButton = document.getElementById("submit-button");


submitButton.addEventListener('click' ,

    function () {

        console.log ('KmInput.value', KmInput.value)
        console.log ('ageSelect.value', ageSelect.value)

        const Km = KmInput.value;
        const age = ageSelect.value;
        
        const basePrice = 0.21 * Km;
        console.log('basePrice', basePrice, typeof basePrice)
        let finalPrice = basePrice;
        let discount;
        if (isNaN(Km) == true) {

            
            
        }
        if (age == 'm' ) {

            discount = basePrice / 100*20; // 20% di basePrice
            console.log('discount', discout, typeof discount)
            finalPrice = basePrice - discount; //Prezzo finale MINORENNI
            console.log('finalPrice', finalPrice, typeof finalPrice)
            
        }
        else if (age == 'o') {

            discount = basePrice / 100 * 40; // 40% rispetto al baseprice
            console.log('discount', discount, typeof discount)
            finalPrice = basePrice - discount; //prezzo finale OVER 65
            console.log('finalPrice', finalPrice, typeof finalPrice)
            
        }

        alert('Prezzo finale = euro' + finalPrice.toFixed(2));

        console.log('finalPrice.toFixed(2)' , finalPrice.toFixed(2), typeof finalPrice.toFixed(2))

    }

);

emptyButton.addEventListener('Click' ,

    function () {

        KmInput.value = '';
        ageSelect.value= ''
        
    }



























)