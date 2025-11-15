
export interface VocabularyItem {
  es: string;
  en: string;
  description_es: string;
}

export interface Lesson {
  id: number;
  title_es: string;
  title_en: string;
  content_es: string;
  example_html: string;
  example_css: string;
  vocabulary: VocabularyItem[];
}
