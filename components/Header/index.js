// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {}

function Header() {
  const header = document.createElement('header');
  console.log(header)
  const date = document.createElement('date');
  const lambdaH1 = document.createElement('h1');
  const temp = document.createElement('span');

  header.appendChild(date);
  header.appendChild(lambdaH1);
  header.appendChild(temp);

  header.classList.add('header');
  date.classList.add('date');
  temp.classList.add('temp');

  date.textContent = 'March 13. 2020';
  lambdaH1.textContent = 'Lambda Times';
  temp.textContent = '98'
  return header
}

document.querySelector('.header-container').append(Header());


