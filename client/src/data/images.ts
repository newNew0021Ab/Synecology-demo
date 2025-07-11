
// Централизованное хранение всех изображений проекта
export const IMAGES = {
  caseStudies: {
    coffee: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3",
    solarEnergy: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3", 
    wetlands: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3",
    waterTreatment: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3"
  },
  services: {
    audit: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3",
    documentation: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3",
    monitoring: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
  },
  blog: {
    certification: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3",
    waste: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3",
    emissions: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3"
  }
};

// Типы для TypeScript
export type ImageCategory = keyof typeof IMAGES;
export type ImageKey<T extends ImageCategory> = keyof typeof IMAGES[T];
