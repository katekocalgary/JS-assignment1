const green = 'rgba(118,174, 170, 1)'
const black = 'rgba(23,35, 50, 1)'
const brown = 'rgba(205,164, 133, 1)'
const greenblue = 'rgba(62,171, 201, 1)'
const pink = 'rgba(254,156, 161, 1)'
const blue = 'rgba(98,189, 254, 1)'

const data = [
    {
        topic: 'Food',
        title: 'Wake Up and Smell the Coffee',
        price: '$0.90',
        color: green
    },
    {
        topic: 'Architecture',
        title: 'The Brand New NASA Office',
        price: '$0.19',
        color: black
    },
    {
        topic: 'Travel',
        title: 'Experience the Saharan Sands',
        price: '$2.29',
        color: brown
    },
    {
        topic: 'Interior',
        title: '9 Air-Cleaning Plants Your Home Needs',
        price: '$0.09',
        color: greenblue
    },
    {
        topic: 'Food',
        title: 'One Month Sugar Detox',
        price: '$0.99',
        color: pink
    },
    {
        topic: 'Photography',
        title: 'Shooting Minimal Instagram Photos',
        price: '$0.29',
        color: blue
    }
]


// Instructions
// Take the data above and display it as tiles on the page




function makeTile(){
    const cardRow = document.querySelector(".card-row");
    const cardDiv = document.createElement("div");
    cardDiv.className = "card";
    cardRow.appendChild(cardDiv);
    return cardDiv;
}


function makeTopic(topicV){
    const cardWrap = document.querySelector(".card");
    const topicDiv = document.createElement("div");
    topicDiv.className ="topic";
    topicDiv.innerText = topicV;
    cardWrap.appendChild(topicDiv);
    return topicDiv
}


function makeTitle(titleV){
    const cardWrap = document.querySelector(".card");
    const titleDiv = document.createElement("div");
    titleDiv.className ="title";
    titleDiv.innerText = titleV;
    cardWrap.appendChild(titleDiv);
    return titleDiv
}


function makeButton(buttonV){
    const cardWrap = document.querySelector(".card");
    const buttonDiv = document.createElement("div");
    buttonDiv.className ="buy-button";
    buttonDiv.innerText = buttonV;
    cardWrap.appendChild(buttonDiv);
    return buttonDiv;
}


for(let i=0; i < data.length ; i++) {
    function createCard(){
        const colorV = data[i].color;
        const cardDiv = makeTile(colorV);
        cardDiv.style = "background-color:" + colorV;
        
        const topicV = data[i].topic;
        const topic = makeTopic(topicV);

        const titleV = data[i].title;
        const title = makeTitle(titleV);

        const buttonV = "Read for "+data[i].price;
        const button = makeButton(buttonV)


        cardDiv.appendChild(topic);
        cardDiv.appendChild(title);
        cardDiv.appendChild(button);
        return cardDiv;
    }

console.log(createCard(data));
}





