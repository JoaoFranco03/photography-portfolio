const categories = [
    {
      name: 'Kids & Parents',
      name_cn: '儿童与亲子',
      id: "kids-and-parents",
      description: 
      "From the first days of life, to the steps of growing up, in these photographs we see a glimpse of something pure and true.",
      description_cn:
      "从牙牙学语，到成长的每一步，我们在摄影中窥见可爱与纯真。",
      photos: [
        { title: 'Young Boy 1', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%84%BF%E7%AB%A5%E4%B8%8E%E4%BA%B2%E5%AD%90/1.jpg' },
        { title: 'Young Boy 2', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%84%BF%E7%AB%A5%E4%B8%8E%E4%BA%B2%E5%AD%90/2.jpg' },
        { title: 'Mom and Boy', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%84%BF%E7%AB%A5%E4%B8%8E%E4%BA%B2%E5%AD%90/3.jpg' },
        { title: 'Young Girl 1', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%84%BF%E7%AB%A5%E4%B8%8E%E4%BA%B2%E5%AD%90/4.JPG' },
        { title: 'Mom and Girl', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%84%BF%E7%AB%A5%E4%B8%8E%E4%BA%B2%E5%AD%90/5.JPG' },
        { title: 'Young Girl 2', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%84%BF%E7%AB%A5%E4%B8%8E%E4%BA%B2%E5%AD%90/6-2.jpg' },
      ]
    },
    {
      name: 'Family & Friends',
      name_cn: '家庭和亲友',
      id: "family-and-friends",
      description: 
      "Gathered together, young and old. In moments that bring us all close, we see the ties that bind us through the images that expose.",
      description_cn:
      "三世同堂。每一张照片都如同一段动人的故事，将我们带回到那些温馨而珍贵的时刻。",
      photos: [
        { title: 'Family', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%AE%B6%E5%BA%AD%E5%92%8C%E4%BA%B2%E5%8F%8B/AD-6.jpg' },
        { title: 'Young Couple', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%AE%B6%E5%BA%AD%E5%92%8C%E4%BA%B2%E5%8F%8B/AD-9.jpg' },
        { title: 'Old Couple', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%AE%B6%E5%BA%AD%E5%92%8C%E4%BA%B2%E5%8F%8B/AD-25.jpg' },
      ]
    },
    {
      name: 'Work & Business',
      name_cn: '工作与商务',
      id: "word-and-business",
      description: 
      "My lens witnesses the essence of their spirit, the depth of their passion, and the beauty of their enterprise.",
      description_cn:
      "我们的镜头见证了我们的活力、热情，以及对事业的热爱。",
      photos: [
        { title: 'Business 1', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%B7%A5%E4%BD%9C%E5%92%8C%E5%95%86%E5%8A%A1/1.jpg' },
        { title: 'Business 2', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%B7%A5%E4%BD%9C%E5%92%8C%E5%95%86%E5%8A%A1/2.jpg' },
        { title: 'Business 3', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%B7%A5%E4%BD%9C%E5%92%8C%E5%95%86%E5%8A%A1/3.jpg' },
        { title: 'Business 4', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%B7%A5%E4%BD%9C%E5%92%8C%E5%95%86%E5%8A%A1/4.JPG' },
        { title: 'Business 5', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%B7%A5%E4%BD%9C%E5%92%8C%E5%95%86%E5%8A%A1/5.JPG' },
        { title: 'Business 6', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E5%B7%A5%E4%BD%9C%E5%92%8C%E5%95%86%E5%8A%A1/6.jpg' },
      ]
    },
    {
      name: 'Art & Fashion',
      name_cn: '艺术与时尚',
      id: "art-and-fashion",
      description: 
      "Behold the human soul through the lens of my camera. Witness the beauty and complexity of our species, and discover the stories that shape us all.",
      description_cn:
      "相机乃是灵魂的亲历者。在镜头下，尽是人类的复杂与美丽。",
      photos: [
        { title: 'Art 1', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E8%89%BA%E6%9C%AF%E4%B8%8E%E6%97%B6%E5%B0%9A/1.jpg' },
        { title: 'Art 2', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E8%89%BA%E6%9C%AF%E4%B8%8E%E6%97%B6%E5%B0%9A/2.jpg' },
        { title: 'Art 3', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E8%89%BA%E6%9C%AF%E4%B8%8E%E6%97%B6%E5%B0%9A/3.jpg' },
        { title: 'Art 4', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E8%89%BA%E6%9C%AF%E4%B8%8E%E6%97%B6%E5%B0%9A/4.JPG' },
        { title: 'Art 5', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E8%89%BA%E6%9C%AF%E4%B8%8E%E6%97%B6%E5%B0%9A/5.jpg' },
        { title: 'Art 6', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E8%89%BA%E6%9C%AF%E4%B8%8E%E6%97%B6%E5%B0%9A/6.JPG' },
      ]
    },
    {
      name: 'Landscapes & Still Lifes',
      name_cn: '风景和静物',
      id: "landscapes-and-still-lifes",
      description: 
      "From the winding roads of distant lands to the lush forests and ancient hutongs of Huizhou,\
      my lens conveys the essence of the natural world.",
      description_cn:
      "在路上、草原里、胡同中，我们向往传递大自然的魅力。",
      photos: [
        { title: 'Mountain', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E9%A3%8E%E6%99%AF%E5%92%8C%E9%9D%99%E7%89%A9/1.jpg' },
        { title: 'Temple', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E9%A3%8E%E6%99%AF%E5%92%8C%E9%9D%99%E7%89%A9/2.jpg' },
        { title: 'Tree', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E9%A3%8E%E6%99%AF%E5%92%8C%E9%9D%99%E7%89%A9/3.jpg' },
        { title: 'Hutong', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E9%A3%8E%E6%99%AF%E5%92%8C%E9%9D%99%E7%89%A9/4.jpg' },
        { title: 'Bath', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E9%A3%8E%E6%99%AF%E5%92%8C%E9%9D%99%E7%89%A9/5.jpg' },
        { title: 'Car', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E9%A3%8E%E6%99%AF%E5%92%8C%E9%9D%99%E7%89%A9/6.jpg' },
        { title: 'Leaf 1', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E9%A3%8E%E6%99%AF%E5%92%8C%E9%9D%99%E7%89%A9/7.jpg' },
        { title: 'Leaf 2', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E9%A3%8E%E6%99%AF%E5%92%8C%E9%9D%99%E7%89%A9/8.jpg' },
        { title: 'Leaf 3', imageUrl: 'https://guang-studio.s3.us-west-1.amazonaws.com/guang-studio-pics/%E9%A3%8E%E6%99%AF%E5%92%8C%E9%9D%99%E7%89%A9/9.JPG' },
      ]
    },
  ];
  const categoriesElement = document.getElementById('categories');

  categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('mb-8', 'pt-8');
  
    const categoryTitleElement = document.createElement('h2');
    categoryTitleElement.classList.add('text-2xl', 'mb-2');
    if (document.documentElement.lang === 'en') {
      categoryTitleElement.textContent = category.name;
    } else {
      categoryTitleElement.textContent = category.name_cn;
    }
    categoryTitleElement.id = category.id;
    categoryElement.appendChild(categoryTitleElement);
  
    const categoryDescriptionElement = document.createElement('p');
    categoryDescriptionElement.classList.add('text-lg', 'text-gray-600', 'mb-4');
    if (document.documentElement.lang === 'en') {
      categoryDescriptionElement.textContent = category.description;
    } else {
      categoryDescriptionElement.textContent = category.description_cn;
    }
    categoryElement.appendChild(categoryDescriptionElement);
  
    const photosElement = document.createElement('div');
    photosElement.classList.add('grid', 'grid-cols-3', 'gap-2');
  
    category.photos.forEach(photo => {
      const photoElement = document.createElement('div');
      if (category.name === 'Kids & Parents' || category.name === 'Family & Friends') {
        photoElement.classList.add('rounded-md', 'relative', 'aspect-w-1', 'aspect-h-1', 'overflow-hidden');
        photoElement.style.paddingBottom = '100%';
      } else {
        photoElement.classList.add('rounded-md', 'overflow-hidden');
      }

      const galleryElement = document.createElement('a');
      galleryElement.href = photo.imageUrl;
      galleryElement.setAttribute("data-fancybox", "gallery");
  
      const imageElement = document.createElement('img');
      imageElement.src = photo.imageUrl;
      imageElement.alt = photo.title;
      if (category.name === 'Kids & Parents' || category.name === 'Family & Friends') {
        imageElement.classList.add('object-cover', 'absolute', 'h-full', 'w-full', 'object-cover', 'object-center',
        'opacity-0', 'animate-fade-in', 'transition', 'duration-500', 'transform', 'scale-100',);
      } else {
        imageElement.classList.add('block', 'h-full', 'w-full', 'object-cover', 'object-center',
        'opacity-0', 'animate-fade-in', 'transition', 'duration-500', 'transform', 'scale-100',);
      }

      galleryElement.appendChild(imageElement);
      photoElement.appendChild(galleryElement);
      photosElement.appendChild(photoElement);
    });
  
    categoryElement.appendChild(photosElement);
    categoriesElement.appendChild(categoryElement);
  });  