// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
  .then( result =>  {
    console.log(result);
    const list =  Object.keys(result.data.articles)

    for (let i = 0; i < list.length; i++) {

        const key = list[i];

        result.data.articles[`${key}`].forEach(element => {
            CardCreator(element);
        });
    }
})
  .catch(error =>{
    console.log(error); 
})

function CardCreator(data) {

  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('span');
  const cardContainer = document.querySelector(".cards-container")

  card.classList.add('card');
  headline.classList.add('headline');
   author.classList.add('author');   
  imageContainer.classList.add('img-container');
  

  headline.textContent = data.headline;
  name.textContent = data.authorName;
  image.src = data.authorPhoto;
  
cardContainer.appendChild(card);
card.appendChild(headline);
card.appendChild(author);
author.appendChild(imageContainer);
imageContainer.appendChild(image);
author.appendChild(name);
console.dir(card)
return card;

}



