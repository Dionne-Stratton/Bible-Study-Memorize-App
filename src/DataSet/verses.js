import Genesis1_1 from "./Files/Genesis1_1-slow.mp4";
import Genesis1_2 from "./Files/Genesis1_2-slow.mp4";
// import Genesis1_3 from "./Files/Genesis1_3.mp4";
// import Genesis1_4 from "./Files/Genesis1_4.mp4";

export const verses = [
  {
    _id: 1,
    reference: "Genesis 1:1",
    hebrewText: "בְּרֵאשִׁית בָּרָא אֱלֹהִים אֵת הַשָּׁמַיִם וְאֵת הָאָרֶץ",
    reading: "B'reishit bara Elohim et hashamayim v'et ha'aretz",
    englishText: "In the beginning God created the heavens and the earth",
    englishVersion: "NIV",
    notes: "This is the first verse of the Bible",
    spoken: Genesis1_1,
    hebrewVocab: [
      {
        word: "בְּרֵאשִׁית",
        meaning: "In the beginning",
        reading: "B'reishit",
      },
      { word: "בָּרָא", meaning: "created", reading: "bara" },
      { word: "אֱלֹהִים", meaning: "God", reading: "Elohim" },
      { word: "הַשָּׁמַיִם", meaning: "heavens", reading: "hashamayim" },
      { word: "וְאֵת", meaning: "and", reading: "v'et" },
      { word: "הָאָרֶץ", meaning: "the earth", reading: "ha'aretz" },
    ],
  },
  {
    _id: 2,
    reference: "Genesis 1:2",
    hebrewText:
      "וְהָאָרֶץ הָיְתָה תֹהוּ וָבֹהוּ וְחֹשֶׁךְ עַל־פְּנֵי תְהוֹם וְרוּחַ אֱלֹהִים מְרַחֶפֶת עַל־פְּנֵי הַמָּיִם",
    reading:
      "V'ha'aretz hayetah tohu vavohu v'choshech al-p'nei tehom v'ruach Elohim m'rachefet al-p'nei hamayim",
    englishText:
      "Now the earth was formless and empty, darkness was over the surface of the deep, and the Spirit of God was hovering over the waters",
    englishVersion: "NIV",
    notes: "This is the second verse of the Bible",
    spoken: Genesis1_2,
    hebrewVocab: [
      { word: "וְהָאָרֶץ", meaning: "And the earth", reading: "V'ha'aretz" },
      { word: "הָיְתָה", meaning: "was", reading: "hayetah" },
      { word: "תֹהוּ", meaning: "formless", reading: "tohu" },
      { word: "וָבֹהוּ", meaning: "empty", reading: "vavohu" },
      { word: "וְחֹשֶׁךְ", meaning: "and darkness", reading: "v'choshech" },
      {
        word: "עַל־פְּנֵי",
        meaning: "over the surface of",
        reading: "al-p'nei",
      },
      { word: "תְהוֹם", meaning: "deep", reading: "tehom" },
      { word: "וְרוּחַ", meaning: "and Spirit", reading: "v'ruach" },
      { word: "אֱלֹהִים", meaning: "God", reading: "Elohim" },
      { word: "מְרַחֶפֶת", meaning: "was hovering", reading: "m'rachefet" },
      { word: "הַמָּיִם", meaning: "the waters", reading: "hamayim" },
    ],
  },
  {
    _id: 3,
    reference: "Genesis 1:3",
    hebrewText: "וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי־אוֹר",
    reading: "Vayomer Elohim yehi or vayehi-or",
    englishText: "And God said, 'Let there be light,' and there was light",
    englishVersion: "NIV",
    notes: "This is the third verse of the Bible",
    // spoken: Genesis1_3,
  },
  {
    _id: 4,
    reference: "Genesis 1:4",
    hebrewText:
      "וַיַּרְא אֱלֹהִים אֶת־הָאוֹר כִּי־טוֹב וַיַּבְדֵּל אֱלֹהִים בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ",
    reading:
      "Vayar Elohim et-ha'or ki-tov vayavdel Elohim bein ha'or uvein hachoshech",
    englishText:
      "God saw that the light was good, and he separated the light from the darkness",
    englishVersion: "NIV",
    notes: "This is the fourth verse of the Bible",
    // spoken: Genesis1_4,
  },
];
