export type Planet = {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  [key: string]: any;
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
    width: number;
    height: number;
  };
};

export type PlanetSizes = {
  small: number;
  medium: number;
  large: number;
};
