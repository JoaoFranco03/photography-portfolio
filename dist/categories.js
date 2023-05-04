const categories = [
    {
      name: 'Kids & Parents',
      id: "kids-and-parents",
      description: 
      "From the first days of life, to the steps of growing up, in these photographs we see a glimpse of something pure and true.",
      photos: [
        { title: 'Young Boy 1', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81pouZaVjFcCfNjwYissUwqIa1Qj7RbAvoKW5eRYERbLEa6lyQp--xY0m2hqG84WElgM6ieNGn2l61uHIgTLDBHoUCENgw=s1600' },
        { title: 'Young Boy 2', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81r3NdOEZ8GLcC5YoEJfpKLU1LcE1DgwmY7EhJgSvaxDT-26zPB36wFcq3gwxSmEedlGSpdC8m_UQ-ROLTFGr9EEmYAzyg=s1600' },
        { title: 'Mom and Boy', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81pHbe3ySB6Z729WMVaYieOKNOyjus2aaGAgoPxbFji_S1dqIKniybET1YPS8sfSlbBV0kVsq5Ctow3aWFvc_bKWiTHzyw=s1600' },
        { title: 'Mom and Girls', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81o72B0SXU36jSynNS6PgWS-BkJHA4wpQNlrMamPe5-ky3CqmFZbZZBc7jKQo0E6e1iJlgmVy7TOterBb2esFx0skpXeRg=s1600' },
        { title: 'Young Girl 1', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81q_dYrFsnXUxDNq9vkuRaczQzuyfxMzsYDTyDd1elB3axGQ-cUAtwLVWgEYHnEaQJxp0LLet9puP72uz7aEHiYxYkCvcA=s1600' },
        { title: 'Young Girl 2', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81rQw8gECCLhkan1Rv0KeTc2OF_ayLK3oEFnZ7bsWfgSob7yEsqLaPtEOK0AJCivZXpa7iGWkzTFcAbv9c6m94c4hMhjhQ=s1600' },
      ]
    },
    {
      name: 'Family & Friends',
      id: "family-and-friends",
      description: 
      "Gathered together, young and old. In moments that bring us all close, we see the ties that bind us through the images that expose.",
      photos: [
        { title: 'Family', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81obtJJThLSTt72aWUmWwsEXoyd6X5wrkro6Uqh-O7lgUlqZnlEPn0W1vAP2RYfSzm7RD4TSth6nZrep3aFQzyM1CjLICw=s1600' },
        { title: 'Young Couple', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81r0ka3U-8A5HkSRfW-7xQnGVSIAxw3BjZ7fzAPJJZoSc1MJVYMSaOHkHKj1vDhNBUYPaIMQxPIjYCV9rdabyPMVZhvh=s1600' },
        { title: 'Old Couple', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81ooONHui0oskZdmrqlQCCsy2RAmzecNa7xYRRf3kQLRztMkGtw8Djz6Bv7wxYC1nBnyoPwNDHOljCfax9lRcRn2kQA8JA=s1600' },
      ]
    },
    {
      name: 'Work & Business',
      id: "word-and-business",
      description: 
      "My lens witnesses the essence of their spirit, the depth of their passion, and the beauty of their enterprise.",
      photos: [
        { title: 'Business 1', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81rgaOHwK2zDJHMALa6ItRIanHR3WHRnzYojXnQ_ms5bDlhJY7PO_T8QblmTSb1DRauwJQ79SnyS7ydfdTROJY-s3h_44g=s1600' },
        { title: 'Business 2', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81qw1M2P-lbJJ7C23fnJNvEZRUTsX5ACOMDetIble_iQ_zR9nTKAVymhdtzNUjIWANM51bvq2aUcQq-qkeQvsPT9gAsc8Q=s1600' },
        { title: 'Business 3', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81oPqobIstbbpkYqzRXyMnbrlKqOednFqx0qO9JhwDtZcVz9FxcqHkcv92Je4LAisXmHaBp8Aslb3pvZMnf1FoNdhkoRjA=s1600' },
        { title: 'Business 4', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81p2fFjjWKIjq_kcrs0Va-9i3ioAWY9PRLzJfJuvKQ-2MNOmAAFyabdMiO4tRsBwZ8Kahd-yF9Iuk-hjWAwcdQEkZDAB=s1600' },
        { title: 'Business 5', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81r8ncN95FUeowTeZ8DJg6cHfCp06Xy-xwLjA127n42hQObUea6qLPvuDRIwEl0xYtdRep42tiHAzOaT7STFO0Ur36mk3g=s1600' },
        { title: 'Business 6', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81q0q7JoTn1xVHoE3q8ix3b8SaNFixXlPjuLyFKg0FDx_6ZLckI5TniOsbQylaKN801bAc6t8mjFkxKSDc7ldjeW0kEp=s1600' },
      ]
    },
    {
      name: 'Art & Fashion',
      id: "art-and-fashion",
      description: 
      "Behold the human soul through the lens of my camera. Witness the beauty and complexity of our species, and discover the stories that shape us all.",
      photos: [
        { title: 'Art 1', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81p5IdserQETCheAFJhQvXcSESItofsdj7M39Ti73RgB18Ic9-a9FqQYMSC_yPtiZ-IqEdSKVjvjVEfhJ7Rtxs6ZxdKX=s1600' },
        { title: 'Art 2', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81pdc9ECtTiNr09LXvY9Fc7qj13P0pJ9fghXBSpID47yLq_x-RxITFYvKn_I0aecmp-MuL5TVTQPm7zI-wAdOm8S-gPd=s1600' },
        { title: 'Art 3', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81oWMkRJgmhDUSCFVz9b_1UIIqLakVTQeGDw0S2UHJFzgqYtwSlHEkSoKfz8GMvJfLv1Gnws1jpqu2BpNbUC0Vsl-V4QGQ=s1600' },
        { title: 'Art 4', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81pKisDBXCySlLmD3tpij5SKbDLnW7NMQSFrcGcNzaxtZE9m6YSJaj3gukeM7KUP0CS8NiPu4WPPE3u2LPA1xxnWT78t=s1600' },
        { title: 'Art 5', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81qGHPkrlt5qMAbPpaFkk1-f4UUClXqxF3bpbcchkzcKeOxkeI_q3Hw-21Jjx3U0iD74RcDiry7N6mzSXXFGeeUsek-ung=s1600' },
        { title: 'Art 6', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81rLAYQGPLAXEO7dQjX_LRhvQYYmdxZfxsQwRt3Vm0QRUVmEELUMvDrRHxAeiZchV-xaI8-HL9XZ1vV5fyuU0yuGr2Cv=s1600' },
      ]
    },
    {
      name: 'Landscapes & Still Lifes',
      id: "landscapes-and-still-lifes",
      description: 
      "From the winding roads of distant lands to the lush forests and ancient hutongs of Huizhou,\
      my lens conveys the essence of the natural world.",
      photos: [
        { title: 'Mountain', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81ranRYB7ly_nArlOp-6-WMMBfYN10d1_QLLjDE-ueKoZYui-XFGq5vdvxX3_gjm8m3CiTofbxTa4ghwyUXDiaY5sdbM=s1600' },
        { title: 'Temple', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81rVKDvwHTs4wSx_4t3JjTvympU7AsadK1z3hfEC40cKNqddMzObZmTXc1jeqAPqOWAzQNi5gnd6hFt32FjMaY8yWfSs=s1600' },
        { title: 'Tree', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81qLz-jjxs2PNhaS_wsbMcr0YvZBlUwBk_yCXsMJHQyKh1D6V7B5TyJ7UnMzDh_I9s7iogBM9Tj7WOdkvffOnDoM7Wrjwg=s1600' },
        { title: 'Hutong', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81rTpohJpgoIJPDmPz5ttL804hXJWv-yNKknsY03tybWH0Hj2GVoPLA6uo76EaLkXa-AL6MYBHG23Cr_dtu9uh7lPPX-0Q=s1600' },
        { title: 'Bath', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81qu6aGtKtly3oeS6We7S01-CxNTylLmlSCQxvwEdCIL5pT48Q5xrkmbsA2veat8awy-27wxcDyo0lKBfQuKmm2Gila-=s1600' },
        { title: 'Car', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81qlfSPXMyIW7M5pPSsz2YLPLuZXgrQZnVW-lmNvnB2jvtdLlPtjF3BIRbvoYtACg_79PpoHhvHRK38azHuwmNs3CEvCEA=s1600' },
        { title: 'Leaf 1', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81paJPApHW_p6etknpQJ7eALAjrcwlSEWsv-Z8eVVHOlLpCCQiVy8u8vhJjRXPKmDax0pfaU6dtXSZ_QbsSQaumAZLk2Cg=s1600' },
        { title: 'Leaf 2', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81otbs7pwMBd7NzWh3X96-9gJ-WP6d8dRD13D2crQMQ2d6BYdFi1ojvfbBAWCVNi7R2_LN-7ZX6ZplFr_bCIh1fYbAel=s1600' },
        { title: 'Leaf 3', imageUrl: 'https://lh3.googleusercontent.com/drive-viewer/AFGJ81qGaPdE5aCENbefrMMhYUJzktgQJonbPeQkIAWejYMEdxlW43rHmiuMCCVbGD3p4OMBgXaaaHqTqIzFU7kprg09mkj3=s1600' },
      ]
    },
  ];
  const categoriesElement = document.getElementById('categories');

  categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('mb-8', 'pt-8');
  
    const categoryTitleElement = document.createElement('h2');
    categoryTitleElement.classList.add('text-2xl', 'mb-2');
    categoryTitleElement.textContent = category.name;
    categoryTitleElement.id = category.id;
    categoryElement.appendChild(categoryTitleElement);
  
    const categoryDescriptionElement = document.createElement('p');
    categoryDescriptionElement.classList.add('text-lg', 'text-gray-600', 'mb-4');
    categoryDescriptionElement.textContent = category.description;
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