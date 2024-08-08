import Quran from "../index";

const { getChapter, getVerses } = Quran();

describe("Get complete surah", () => {
  test("Get the first surah", () => {
    expect(getChapter(1)).toContain("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ");
    expect(getChapter(1)).toContain("ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ");
    expect(getChapter(1)).toContain(
      "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ"
    );
  });

  test("Get surah alIkhlas (112)", () => {
    expect(getChapter(112)).toContain("قُلۡ هُوَ ٱللَّهُ أَحَدٌ");
    expect(getChapter(112)).toContain("ٱللَّهُ ٱلصَّمَدُ");
    expect(getChapter(112)).toContain("لَمۡ يَلِدۡ وَلَمۡ يُولَدۡ");
    expect(getChapter(112)).toContain("وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ");
  });

  test("Get the last surah", () => {
    expect(getChapter(114)).toContain("قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ");
    expect(getChapter(114)).toContain("مَلِكِ ٱلنَّاسِ");
    expect(getChapter(114)).toContain("إِلَٰهِ ٱلنَّاسِ");
    expect(getChapter(114)).toContain("مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ");
  });

  test("Thwor an error if surah number out of range", () => {
    expect(() => {
      getChapter(200);
    }).toThrow("Wrong surah number!");

    expect(() => {
      getChapter(0);
    }).toThrow("Wrong surah number!");
  });
});

describe("Get ayat", () => {
  test("Throw error if ayah number is out of range", () => {
    expect(() => {
      getVerses({ surahNumber: 1, ayahNumber: 16 });
    }).toThrow("Wrong ayah number!");

    expect(() => {
      getVerses({ surahNumber: 1, ayahNumber: 0 });
    }).toThrow("Wrong ayah number!");
  });

  test("Get 1 ayah", () => {
    expect(getVerses({ surahNumber: 2, ayahNumber: 1, length: 1 })).toContain(
      "الٓمٓ"
    );
  });

  test("Get 2 ayat", () => {
    expect(getVerses({ surahNumber: 103, ayahNumber: 2, length: 2 })).toContain(
      "إِنَّ ٱلۡإِنسَٰنَ لَفِي خُسۡرٍ"
    );
    expect(getVerses({ surahNumber: 103, ayahNumber: 2, length: 2 })).toContain(
      "إِلَّا ٱلَّذِينَ ءَامَنُواْ وَعَمِلُواْ ٱلصَّـٰلِحَٰتِ وَتَوَاصَوۡاْ بِٱلۡحَقِّ وَتَوَاصَوۡاْ بِٱلصَّبۡرِ"
    );
  });

  test("Throw error if length is out of range", () => {
    expect(() => {
      getVerses({ surahNumber: 112, length: 16 });
    }).toThrow("Wrong length!");

    expect(() => {
      getVerses({ surahNumber: 1, length: 0 });
    }).toThrow("Wrong length!");
  });

  test("Get remainng ayat if length not provided", () => {
    expect(getVerses({ surahNumber: 95, ayahNumber: 3 })).toContain(
      "أَلَيۡسَ ٱللَّهُ بِأَحۡكَمِ ٱلۡحَٰكِمِينَ"
    );
  });
});

describe("Show or hide ayah numbers", () => {
  test("Show ayah number by default", () => {
    expect(getChapter(1)).toContain("\u06dd");
    expect(getVerses({ surahNumber: 1, ayahNumber: 5, length: 1 })).toContain(
      "\u06dd٥"
    );
    expect(getVerses({ surahNumber: 2, ayahNumber: 255, length: 1 })).toContain(
      "\u06dd۲٥٥"
    );
  });

  test("Hide the number", () => {
    expect(getVerses({ surahNumber: 112, showNumbers: false })).not.toContain(
      "\u06dd"
    );
  });
});

describe("Strip words from start or end", () => {
  test("Strip from start", () => {
    expect(
      getVerses({
        surahNumber: 1,
        ayahNumber: 7,
        stripWordsFromStart: 4,
      })
    ).toBe("غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ ۝۷");
  });

  test("Strip from end", () => {
    expect(
      getVerses({
        surahNumber: 1,
        ayahNumber: 7,
        stripWordsFromEnd: 5,
      })
    ).toMatch("صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ");

    expect(
      getVerses({
        surahNumber: 2,
        length: 1,
        stripWordsFromStart: 1,
        showNumbers: false,
      })
    ).toBe("الٓمٓ ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ");
  });
});
