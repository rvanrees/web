export interface Experience {
  id: number;
  title: string;
  value: number;
  level: string;
  content: string;
}

export interface Photo {
  id: number;
  url: string;
  src: {
    medium: string;
  };
  alt: string;
}

export interface Commit {
  sha: string;
  commit: {
    message: string;
    author: {
      date: string;
    };
  };
}
