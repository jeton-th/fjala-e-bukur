import { faker } from "@faker-js/faker";
import { PostType } from "./types";
// import { getVerse } from "quran-db";

export function createRandomUser(): Pick<PostType, "title" | "content"> {
  return {
    title: faker.lorem.sentence(),
    content: [{ type: "latin", text: faker.lorem.paragraph() }],
  };
}

// export const posts: PostType[] = faker.helpers
//   .multiple(createRandomUser, {
//     count: 100,
//   })
//   .map((post, id) => ({ id: id.toString(), ...post }));

export const posts: PostType[] = [
  {
    id: 0,
    title: "Hyrje",
    content: [
      {
        type: "title",
        text: "Parafjala e botimit te parë",
      },
      {
        type: "latin",
        text: `Lavdi Allahut! Atë e lëvdojmë, prej Tij ndihmë dhe falje kërkojme. I kërkojmë mbrojtje Allahut nga e kegja që është në vete ne dhe veprat tona te këqija. Atë që Allahu e udhëzon nuk ka kush ta humbasë, ndërsa atë që Allahu e humb nuk ka kush ta udhëzojë. Dëshmoj se nuk ka të adhuruar me të drejtë përveç Allahut të Vetëm e të pashoq dhe se Muhamedi ishte robi dhe i Dërguari i Tij.`,
      },
      {
        type: "latin",
        text: "Më pas:",
      },
      {
        type: "latin",
        text: `Vëllai i nderuar Prof. Zuhejr Shavish, pronari i [shtëpisë botuese] "El Mektebul Islamij", më ka sugjeruar të përmbledh librin "Fjala e bukur" të shejhul Islam Ibën Tejmijes, të cilit i pata vendosur shpjegime të shkurtra dhe i pata bërë tahrixh të haditheve. Ai - Allahu ia shpërbleftë me të mira - e botoi në vitin 138s h. Kur e pashë se sugjerimi i tij ishte i dobishëm dhe i begatë - inshaAllah - e aprovova që ta bëja, sidomos kur përmes kësaj gjëje, ne e ndihmojme plotësisht lexuesin që të realizojë këshillën që e kam dhënë në hyrje të librit. Aty kam thënë (fq 16):`,
      },
      {
        type: "latin",
        text: `"Secilin që e lexon këtë libër apo ndonjë tjetër, e këshilloj që mos të veprojë menjëherë me hadithet që përmban, mirëpo vetëm pasi të jetë siguruar rreth saktësisë së tyre. Lexuesit ia kemi lehtësuar rrugën përmes shpjegimeve që kemi vendosur. Le të veprohet dhe të kapet me dhëmballe për hadithet e sakta, përndryshe le të lihen, sepse adhuruesit të Allahut i mjaftojnë hadithet e sakta, madje them me plot siguri: "Nëse muslimanit i lehtësohet të veprojë me çdo hadith të saktë nga Pejgamberi sal-Allahu alejhi ue sel-lem, lidhur me duatë, dhikret dhe lutjet, padyshim se është prej atyre që e përkujtojnë dhe e përmendin shumë Allahun."`,
      },
      {
        type: "latin",
        text: `Është e njohur se t'u paraqesësh dhe t'u ofrosh njerëzve Sunetin të dëlire dhe të pastër, pa hadithet që nuk vërtetohen te dijetarët e hadithit, është më e dobishme për ta, më lëhtesuese dhe ua bën fenë e tyre më të pranueshme. Kjo është më parësore sesa t'ua paraqesësh fenë njerëzve me libra në të cilët ka hadithe që nuk vërtetohet përkatesia te Pejgamberi sal-lAllahu alejhi ue sel-lem, apo që ka edhe hadithe të shpikura, siç është edhe gjendja e shumicës së librave të hadithit, pa përmendur librat e tjerë, e veçanërisht librat e lutjeve dhe dhikrit. [Është më mire që librat të jepen të pastër vetëm me hadithe të sakta, sesa të jepen edhe me hadithe të pasakta] qoftë edhe me vërejtje dhe sqarim i të saktës nga e pasakta (e dobëta), sikurse kemi vepruar në recensimin e këtij libri apo të tjerëve. Pa dyshim se paraqitja për lexuesin e këtij libri të "paster" nga hadithet e pavërtetuara, është me e dobishme dhe më e lehtë që njerëzit të mësojne dhe verojnë me të.`,
      },

      {
        type: "latin",
        text: `Kjo është arsyeja pse kam ndjekur këtë metodë në shume prej librave të mi, ku me të hershmit janë "Sahih Ebi Daud" dhe "Sahih et-terghib uet-terhib", Allahu e lehtësofte përfundimin e tyre. Së fundmi libri "Sahih el xhami' es-saghir ue zijadetuhu", që është botuar vellimi i pare dhe i dytë i tij, po ashtu është botuar libri "Daif el xhami' es-saghir ue zijadetuhu".`,
      },
      {
        type: "latin",
        text: `Kështu ramë dakord me shtëpine botuese "El Mektubul Islamij", për nxjerrjen e librit "Fjala e bukur"<sup>1</sup> me petkun e tij të ri dhe me titull: "Përmbledhja e haditheve të sakta të librit Fjala e bukur", prej të cilit kemi hequr hadithet e pasakta dhe kemi hequr fjalën "kapitull" prej titujve. Po ashtu nëse kemi pasur mundësi, kemi hequr emrin e sahsbiut që transmeton hadithin, kemi hequr emrat e imamëve që kanë transmetuar hadithin dhe komentet që nuk përshtatën me këtë "Përmbledhje të saktë".`,
      },
      {
        type: "latin",
        text: `Po ashtu, në fund të hadithit<sup>2</sup> kam shënuar numrin e hadithit që përputhet me librin origjinal "Fjala e bukur", për atë që dëshiron t'i kthehet haditheve, apo dëshiron të njihet me zinxhiret e transmetimit dhe të lexojë komentimet që janë në të. Kështu i bëhet e lehtë të njohë hadithet që i kam hequr, bashkë me shkakun pse janë hequr.`,
      },
      {
        type: "latin",
        text: `E lus Allahun e Lartësuar ta pranojë prej nesh, t'i japë dobi muslimanëve dhe lutja jonë e fundit është: lavdi Allahut, Zotit të krijesave.`,
      },
      {
        type: "latin",
        text: `Muhammed NasirudDin el-Albani`,
      },
      {
        type: "latin",
        text: `Bejrut 26 Sheual 139 h.`,
      },
      // {
      //   type: "latin",
      //   text: getVerse(2, 22, true),
      // },
    ],
  },
  {
    id: 1,
    title: "Dhikri i mëngjesit dhe i mbrëmbjes",
    content: [],
  },
];
