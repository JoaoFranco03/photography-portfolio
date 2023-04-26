const categories = [
    {
      name: 'Landscape',
      description: 
      "From the winding roads of distant lands to the lush forests and ancient hutongs of Beijing,\
      my landscape photographs convey the essence of the natural world.",
      photos: [
        { title: 'Temple', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81pts1kvncSUQ5SpmK6_zX9onSIPe9cGVJttuSBpbFrRS2fNiE0gf9qyJUTChgOHmf0osqYmqznWumPCFg3Jye0ALkRs-A=s1600' },
        { title: 'Road', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81orX1p5eOhM-fM3hTgK4ndEs2wFR-0IMtoGOz-t9UQdjm84y2_vAdM_ht_8enfyXmnftHj58Cshh9vUOqiLrycShoDv=s1600' },
        { title: 'Car', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81pZzd11pzaWPLYtU56F-m9cFUcYMGU2FdXqBsHvTVEyflPhcaHMKjLKGUghKOF7EIjHilL8ppsV5YYL1jhpTH6GP_yKSg=s1600' },
        { title: 'Hutong', imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81o9M2GEA22bI0RIsfetGs5r5s-UVB9iRP6qtP3xkMNDVpdtRIYY4LYNYriX0w9KVf0jpKNvT7HwlHeX6qV7PQ9A2k6D8A=s1600"},
        { title: 'Bathtub', imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81pBj1H395UV-ZPiUPqtisRgWEFSYSgzHYLbEXMNgBPb81_ElI3Qd2qHyTAjPICxUiigjsbpYgIuB88RhUhR6oeLCcza7g=s1600"},
        { title: 'Grass', imageUrl: "https://lh3.googleusercontent.com/drive-viewer/AFGJ81ravaHN69YfW_wKndzjvFGH_2JcrKSonTegfL2y9jR5qpmvjoEfD4CKcxhXQumOmt7TyPpdUXc_A03dRyQlUO3-rEhC=s1600"}
      ]
    },
    {
        name: 'Portraits',
        description: 
        "Behold the human soul through the lens of my camera.\
        Witness the beauty and complexity of our species, and discover the stories that shape us all. ",
        photos: [
          { title: 'Young Couples', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81rTDlpMYbwOYMRhexGCJAZD5hnww4hhCmfjL4NZDwguLeSOVEHe7YySPXvvdPAy4uZzqWRQ6rWXog44h5AJxOLalIHa=s1600' },
          { title: 'Asian Woman', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81oFav5VCXyCQR-2hpKKxLp-gXol5oD9v2QhVAA2G79QvFogSvkHAsGaN4el4okfgRs7Q3aQeDbALTahm4S-adb4I2rmlQ=s1600' },
          { title: 'Asian Girl', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81qkYOOBBXHWxJfZTbyvPWF9bKGPMuJHfA_x7R-R0DCBUXDi6YGln9rti1FhcQsZoPhhcyaYlQXzZm8cKZq2T5oLi4tVjw=s1600' },
          { title: "Meditating Girl", imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81ojkyvDVU13Xe3HR1iYYypRzAyWSFQZpp11ionG7fm20pzXsILXDz0sL3jGrvVgXCsrrV07Itoci3q8xbpfIwbP40q5=s1600'},
          { title: 'Old Couples', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81ox4yqKZFTPYMfbGAZgTmR1DUdPhdZ_KWjB_A7Nta6IqT4c9Gorz7jfH5BUaYOfa-q2J_fpCgFJJFfFWWyHULi2Z--Z=s1600'},
          { title: 'Black Girl', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81pHsTsvInR2oRHiW3VeaOaUjGJ-cuLe4sL7yBniABTL-3exGwlW0Bzsi9WrLaD-U3v13WFHUHoP2iXs1TgVpjC9vbeNeA=s1600'}
        ]
      },
  ];
  const categoriesElement = document.getElementById('categories');

  categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('mb-8');
  
    const categoryTitleElement = document.createElement('h2');
    categoryTitleElement.classList.add('text-2xl', 'mb-2');
    categoryTitleElement.textContent = category.name;
    categoryElement.appendChild(categoryTitleElement);
  
    const categoryDescriptionElement = document.createElement('p');
    categoryDescriptionElement.classList.add('text-lg', 'text-gray-600', 'mb-4');
    categoryDescriptionElement.textContent = category.description;
    categoryElement.appendChild(categoryDescriptionElement);
  
    const photosElement = document.createElement('div');
    photosElement.classList.add('grid', 'grid-cols-3', 'gap-2');
  
    category.photos.forEach(photo => {
      const photoElement = document.createElement('div');
      photoElement.classList.add('rounded-md', 'overflow-hidden');
  
      const imageElement = document.createElement('img');
      imageElement.src = photo.imageUrl;
      imageElement.alt = photo.title;
      imageElement.classList.add('block', 'h-full', 'w-full', 'object-cover', 'object-center',
      'opacity-0', 'animate-fade-in', 'transition', 'duration-500', 'transform', 'scale-100',);
      photoElement.appendChild(imageElement);
  
      photosElement.appendChild(photoElement);
    });
  
    categoryElement.appendChild(photosElement);
    categoriesElement.appendChild(categoryElement);
  });  