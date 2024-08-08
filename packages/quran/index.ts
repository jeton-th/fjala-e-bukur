import quranJSON from "./quran.json";
import { VerseOptions } from "./types";

const Quran = () => {
  const getVerses = ({
    surahNumber,
    ayahNumber,
    length,
    showNumbers = true,
    stripWordsFromStart = 0,
    stripWordsFromEnd = 0,
  }: VerseOptions) => {
    if (!surahNumber || surahNumber < 1 || surahNumber > 114) {
      throw "Wrong surah number!";
    }

    const surah = quranJSON[surahNumber - 1];
    let start = 1;
    let end = surah.total_verses;

    if (ayahNumber !== undefined) {
      if (ayahNumber < 1 || ayahNumber > surah.total_verses) {
        throw "Wrong ayah number!";
      } else {
        start = ayahNumber;
      }
    }

    if (length !== undefined) {
      if (length < 1 || start + length - 1 > surah.total_verses) {
        throw "Wrong length!";
      } else {
        end = start + length - 1;
      }
    }

    const arabicNumbers = [
      `\u0660`,
      `\u0661`,
      `\u0662`,
      `\u0663`,
      `\u0664`,
      `\u0665`,
      `\u0666`,
      `\u0667`,
      `\u0668`,
      `\u0669`,
    ];

    let verses = surah.verses
      .slice(start - 1, end)
      .map(({ id, text }) => {
        if (showNumbers) {
          const digits = id.toString(10).split("");
          const arabicNumber = digits
            .map((digit) => arabicNumbers[Number(digit)])
            .join("");

          return `${text} ${arabicNumber}`;
        }

        return text;
      })
      .join(" ");

    if (stripWordsFromStart) {
      verses = verses.split(/\s+/).slice(stripWordsFromStart).join(" ");
    }

    if (stripWordsFromEnd) {
      verses = verses.split(/\s+/).slice(0, -stripWordsFromEnd).join(" ");
    }

    return verses;
  };

  const getChapter = (surahNumber: number) => getVerses({ surahNumber });

  return { getChapter, getVerses };
};

export default Quran;
