const content = [
  {
    title: 'Крутой сайт',
    text: 'Странно стажироваться в направлении frontend разработки в компании, которая не может сделать себе хороший сайт.',
  },
  {
    title: 'Адекватное общение с соискателями',
    text: 'Отвечают на отклики, этапированный отбор, адекватный размер тестового задания... Я прослезился',
  },
  {
    title: 'Проекты компании',
    text: 'Их много и все они оставляют приятное ощущение после просмотра. Не то чтобы я просмотрел все, но первые пять точно. (а ещё при скролле вниз кнопка меню исчезает визуально, но она остаётся интерактивной, меню всё равно выпадает. Это фича или баг?)',
  },
  {
    title: 'Прочее',
    text: 'Можно перечислить ещё множество пунктов, но я же не на копирайтера устраиваюсь, верно? (Ещё один баг: на главной странице при ширине 960-813px кнопка меню налслаивается на само меню)',
  }
]



const textBlocks = document.querySelector('.text-blocks');

for(let i = 0; i < content.length; i++) {
  const contentElement = document.querySelector('#block').content.cloneNode(true);
  const blockBtn = contentElement.querySelector('.text-blocks__title');

  blockBtn.textContent = `${i+1}. ` + content[i].title;
  contentElement.querySelector('.text-blocks__text').textContent = content[i].text;
  
  blockBtn.addEventListener('click', function() {
    const textBox = this.nextElementSibling;
    this.classList.toggle('text-blocks__title_active');
    
    if(textBox.style.maxHeight) {
      textBox.style.maxHeight = null;
    } else {
      textBox.style.maxHeight = textBox.scrollHeight +'px';
    }
  })

  textBlocks.append(contentElement);
}

const blockBtn = document.querySelector('.text-blocks__title');

