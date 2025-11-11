// Configuration centralisée des images du portfolio
// Ce fichier contient toutes les images disponibles avec leurs métadonnées

const IMAGES_CONFIG = {
  // Toutes les images disponibles
  // format: 'portrait' (vertical) ou 'landscape' (horizontal)
  all: [
    { 
      filename: 'ThéoNoJitensha-1.jpg', 
      alt: 'a person standing in front of a rock formation', 
      size: 'md:w-1/2',
      category: 'portraits',
      format: 'portrait' // Format vertical
    },
    { 
      filename: 'ThéoNoJitensha-2.jpg', 
      alt: 'a cat laying on top of a sidewalk next to the ocean', 
      size: 'md:w-1/2',
      category: 'portraits',
      format: 'portrait' // Format vertical
    },
    { 
      filename: 'ThéoNoJitensha-3.jpg', 
      alt: 'a man standing on a beach next to the ocean', 
      size: 'w-full',
      category: 'nature',
      format: 'landscape' // Format horizontal
    },
    { 
      filename: 'ThéoNoJitensha-4.jpg', 
      alt: 'a snow covered mountain with trees on the side', 
      size: 'w-full',
      category: 'nature',
      format: 'landscape' // Format horizontal
    },
    { 
      filename: 'ThéoNoJitensha-5.jpg', 
      alt: 'a branch of a plant floating in a body of water', 
      size: 'md:w-1/2',
      category: 'nature',
      format: 'landscape' // Format horizontal
    },
    { 
      filename: 'ThéoNoJitensha-6.jpg', 
      alt: 'a blue sky with a lot of red and orange clouds', 
      size: 'md:w-1/2',
      category: 'nature',
      format: 'landscape' // Format horizontal
    },
    { 
      filename: 'ThéoNoJitensha-7.jpg', 
      alt: 'a view of the ocean from the top of a hill', 
      size: 'md:w-1/2',
      category: 'nature',
      format: 'landscape' // Format horizontal
    }
  ],

  // Fonction pour obtenir le chemin relatif selon la page
  getImagePath: function(filename, basePath = '') {
    return `${basePath}assets/images/${filename}`;
  },

  // Fonction pour obtenir toutes les images
  getAllImages: function(basePath = '') {
    return this.all.map(img => ({
      ...img,
      src: this.getImagePath(img.filename, basePath)
    }));
  },

  // Fonction pour obtenir les images par catégorie
  getImagesByCategory: function(category, basePath = '') {
    return this.all
      .filter(img => img.category === category)
      .map(img => ({
        ...img,
        src: this.getImagePath(img.filename, basePath)
      }));
  },

  // Fonction pour obtenir les images de nature
  getNatureImages: function(basePath = '') {
    return this.getImagesByCategory('nature', basePath);
  },

  // Fonction pour obtenir les images de portraits
  getPortraitImages: function(basePath = '') {
    return this.getImagesByCategory('portraits', basePath);
  },

  // Fonction pour ajouter une nouvelle image (utile pour l'extension future)
  addImage: function(imageData) {
    this.all.push(imageData);
  },

  // Fonction pour obtenir le nombre total d'images
  getTotalCount: function() {
    return this.all.length;
  }
};

