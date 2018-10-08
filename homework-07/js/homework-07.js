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
  
  
  function createPostCard(post) {
  const node = document.createElement('div');
  node.classList.add('post');
  
  const img = document.createElement('img');
  img.classList.add('post__image');
  img.setAttribute('src', `${post.img}`);
  img.setAttribute('alt', 'http://via.placeholder.com/400x150');
  
  const head = document.createElement('h2');
  head.classList.add('post__title');
  head.textContent = post.title;
  
  const text = document.createElement('p');
  text.classList.add('post__text');
  text.textContent = post.text;
  
  const button = document.createElement('a');
  button.classList.add('button');
  button.setAttribute('href', `${post.link}`);
  button.textContent = post.link;
  
    
  document.querySelector('body').appendChild(node);
  node.appendChild(img);
  node.appendChild(head);
  node.appendChild(text);
  node.appendChild(button);
    
  const domNode = node.innerHTML; 
  const body = document.querySelector('body');
    
  body.removeChild(node);
  return domNode;  
  };
  
  const domArr = posts.reduce((dom, el) => dom.concat(createPostCard(el)), []);
  const body = document.querySelector('body');
  
  domArr.forEach((dom) => body.insertAdjacentHTML('beforeend', dom));
  console.log(domArr);