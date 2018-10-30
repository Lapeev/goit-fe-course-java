'use strict';

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

  function createPostCard({img, title, text, link}) {
    const block = document.createElement('div');
    
    const blockDiv = document.createElement('div');
    blockDiv.classList.add('post');

    const blockImg = document.createElement('img');
    blockImg.classList.add('post__image');
    blockImg.setAttribute('src', img);
    blockImg.setAttribute('alt', 'http://via.placeholder.com/400x150');

    const blockTitle = document.createElement('h2');
    blockTitle.classList.add('post__title');
    blockTitle.textContent = title;

    const blockText = document.createElement('p');
    blockText.classList.add('post__text');
    blockText.textContent = text;

    const blockButton = document.createElement('a');
    blockButton.classList.add('button');
    blockButton.setAttribute('href', `${link}`);
    blockButton.textContent = link;

    block.appendChild(blockDiv);
    blockDiv.appendChild(blockImg);
    blockDiv.appendChild(blockTitle);
    blockDiv.appendChild(blockText);
    blockDiv.appendChild(blockButton);
    
    return block;
};

function createCards(posts) {
  return posts.map(item => createPostCard(item));
}


const body = document.querySelector('body');
const inner = createCards(posts).reduce((acc, item) => acc += item.innerHTML, '');
body.appendChild(document.createElement('div')).innerHTML = inner;
