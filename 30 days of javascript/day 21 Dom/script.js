// Exercise

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
const firstP = document.querySelector('p')

// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
const testId1 = document.querySelector('#test1')
const testId2 = document.querySelector('#test2')
const testId3 = document.querySelector('#test3')
const testId4  = document.querySelector('#test4')

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
const AllP = document.querySelectorAll('p')

// 4. Loop through the nodeList and get the text content of each paragraph
for(i = 0; i <= AllP.length; i++){
  console.log(AllP[i].textContent);
};

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
for(i = 0; i <= AllP.length; i++){
  if(i == 3){
    AllP[i].textContent = ' Fourth Paragraph';
  }
};

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
for(i = 0; i <= AllP.length; i++){
    AllP[i].id = 'new';
    AllP[i].className = 'new';
};

