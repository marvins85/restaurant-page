export {component, menu, contact}

function component() {
    const element = document.getElementById('content');
    const div = document.createElement('div');
    div.setAttribute('id','home');
    element.append(div);
    div.classList.add('tabPanel');
    div.style.display = 'block';
    // header
    let head = document.createElement('h1');
    head.textContent = 'Welcome to my restaurant!';
    div.append(head);
    // paragraph
    let para = document.createElement('p');
    para.innerText = "Within we have many spacious, airy rooms, and plenty more intimate nooks and crannies to nestle away in if you're so inclined. Open fires abound throughout, with wooden floors, an attractive collection of rugs and plants, and lots of good old furniture. We like to think we are a pub with real character. To the rear of the pub we have extensive raised terraces which overlook the landscaped lawns and countryside beyond. It'll be a wonderful spot to dine in the sunshine from our seasonal, fresh menus made up of a mixture of hearty British classics and lighter lunchtime bites."
    div.append(para);
    // picture
    let img = document.createElement('img');
    img.src = "/cook.jpg";
    div.append(img);
  };

  function menu(){
    const element = document.getElementById('content');
    const div = document.createElement('div');
    div.setAttribute('id','menu');
    element.append(div);
    div.classList.add('tabPanel');
    div.style.display = 'none';
    let img1 = document.createElement('img');
    img1.src = "/meal1.jpg";
    div.append(img1);
    let img2 = document.createElement('img');
    img2.src = "/meal2.jpg";
    div.append(img2);
    let img3 = document.createElement('img');
    img3.src = "/meal3.jpg";
    div.append(img3);
  };

  function contact(){
    const element = document.getElementById('content');
    const div = document.createElement('div');
    div.setAttribute('id','contact');
    element.append(div);
    div.classList.add('tabPanel');
    div.style.display = 'none';
    let img1 = document.createElement('img');
    img1.src = "/contact.jpg";
    div.append(img1);
    let img2 = document.createElement('img');
    img2.src = "/drinks.jpg";
    div.append(img2);
  };

component();
menu();
contact();
