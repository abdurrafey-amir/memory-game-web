document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: '1',
            img: 'assets/avocado.png'
        },
        {
            name: '2',
            img: 'assets/melon.png'
        },
        {
            name: '3',
            img: 'assets/grape.png'
        },
        {
            name: '4',
            img: 'assets/kiwi.png'
        },
        {
            name: '5',
            img: 'assets/pineapple.png'
        },
        {
            name: '6',
            img: 'assets/cherry.png'
        },
        {
            name: '1',
            img: 'assets/avocado.png'
        },
        {
            name: '2',
            img: 'assets/melon.png'
        },
        {
            name: '3',
            img: 'assets/grape.png'
        },
        {
            name: '4',
            img: 'assets/kiwi.png'
        },
        {
            name: '5',
            img: 'assets/pineapple.png'
        },
        {
            name: '6',
            img: 'assets/cherry.png'
        }
    ]    

    cardArray.sort(() => 0.5 - Math.random())

    const board = document.querySelector('.board')
    const score = document.querySelector('#score')
    const placeholder = 'assets/duck.png'
    const blank = 'assets/blank.png'

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', placeholder)
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            board.appendChild(card)
        }
    }
    createBoard()

    var cardsClicked = []
    var cardsClickedId = []
    var cardsMatched = []

    function flipCard() {
        var cardid = this.getAttribute('data-id')
        cardsClicked.push(cardArray[cardid].name)
        cardsClickedId.push(cardid)
        this.setAttribute('src', cardArray[cardid].img)

        if (cardsClicked.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }

    function checkMatch() {
        var cards = document.querySelectorAll('img')
        const firstCard = cardsClickedId[0]
        const secondCard = cardsClickedId[1]

        if (firstCard === secondCard) {
            cards[firstCard].setAttribute('src', placeholder)
            cards[secondCard].setAttribute('src', placeholder)
            alert('You have clicked the same card!')
        } else if (cardsClicked[0] === cardsClicked[1]) {
            cards[firstCard].setAttribute('src', blank)
            cards[secondCard].setAttribute('src', blank)
            cardsMatched.push(cardsClicked)
            cards[firstCard].removeEventListener('click', flipCard)
            cards[secondCard].removeEventListener('click', flipCard)
        } else {
            cards[firstCard].setAttribute('src', placeholder)
            cards[secondCard].setAttribute('src', placeholder)
        }
        if (cardsMatched.length === cardArray.length/2) {
            alert('You win!')
        }
        
        cardsClicked = []
        cardsClickedId = []
        score.textContent = cardsMatched.length
    }

    
})
