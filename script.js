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

    const board = document.querySelector('.board')
    const score = document.querySelector('#score')
    const placeholder = 'assets/duck.png'
    const blank = 'assets/blank.png'

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', placeholder)
            card.setAttribute('data-id', i)
        }
    }
})