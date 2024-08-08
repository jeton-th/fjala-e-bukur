export interface Surah {
  id: number;
  name: string;
  transliteration: string;
  type: string;
  total_verses: number;
  verses: Ayah[];
}

export interface Ayah {
  id: number;
  text: string;
}

export interface VerseOptions {
  surahNumber: number;
  ayahNumber?: number;
  length?: number;
  showNumbers?: boolean;
  stripWordsFromStart?: number;
  stripWordsFromEnd?: number;
}
