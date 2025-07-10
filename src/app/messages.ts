import {MessagesInterface} from '@/types';

export const messages: MessagesInterface = {
    errorHeading: 'Radās kļūda',
    errorParagraph: 'Atvainojiet, neizdevās ielādēt ziņu apkopojumu. Lūdzu, mēģiniet vēlāk vēlreiz.',
    lastTimeUpdated: 'Pēdējo reizi atjaunināts',
    disclaimer: 'Šis ziņu apkopojums ir veidots un kategorizēts ar mākslīgā intelekta (Google Gemini 2.5 Flash) palīdzību. Lūdzu, ņemiet vērā, ka MI modeļi var saturēt neprecizitātes vai interpretācijas kļūdas. Lai pārliecinātos par informācijas precizitāti, vienmēr pārbaudiet oriģinālos ziņu avotus, kas norādīti pie katras ziņas.',
    rightNowInRiga: 'Šobrīd Rīgā',
    lastTimeUpdatedWarning: 'Lūdzu, ņemiet vērā: dati pēdējo reizi atjaunoti pirms vairāk nekā 12 stundām.',
    footerHeading: 'Šī vietne piedāvā automatizētu un kategorizētu jaunāko ziņu apkopojumu no vadošajiem Latvijas ziņu portāliem.',
    footerItems: [{
        id: 1,
        heading: 'Kā tas darbojas?',
        paragraph: 'Ziņas tiek automātiski apkopotas no vairākām RSS plūsmām. Pēc apkopošanas tās apstrādā Google Gemini mākslīgais intelekts, kas noņem dublikātus, izveido kopsavilkumus, piešķir ziņām kategorijas un atfiltrē nepiemērotu saturu, piemēram, reklāmas, horoskopus un intervijas.',
    }, {
        id: 2,
        heading: 'Cik bieži dati tiek atjaunoti?',
        paragraph: 'Sistēma ziņas atjaunina divreiz dienā – katru rītu plkst. 6:00 un katru vakaru plkst. 18:00, lai nodrošinātu aktuālāko saturu.',
    }, {
        id: 3,
        heading: 'Svarīgi par precizitāti:',
        paragraph: 'Lai gan mēs esam rūpīgi izstrādājuši instrukcijas MI modelim, tas var kļūdīties vai nepareizi interpretēt informāciju. Tādēļ mēs nevaram garantēt 100% precizitāti un aicinām jūs vienmēr pārbaudīt informāciju oriģinālajā ziņu avotā. Saite uz to ir pievienota zem katra virsraksta.',
    }, {
        id: 4,
        heading: 'Kādus avotus mēs izmantojam?',
        paragraph: 'Mēs apkopojam ziņas no vadošajiem Latvijas ziņu portāliem: <a href="https://lsm.lv/" class="text-primary hover:underline">lsm.lv</a>, <a href="https://tvnet.lv/" class="text-primary hover:underline">tvnet.lv</a>, <a href="https://delfi.lv/" class="text-primary hover:underline">delfi.lv</a>, <a href="https://apollo.lv/" class="text-primary hover:underline">apollo.lv</a> un <a href="https://jauns.lv/" class="text-primary hover:underline">jauns.lv</a>.',
    }, {
        id: 5,
        heading: 'Jautājumi vai ieteikumi?',
        paragraph: 'Ja jums ir jautājumi vai ierosinājumi, sazinieties ar mums, rakstot uz e-pastu <a href="mailto:info@dvx.lv" class="text-primary hover:underline">info@dvx.lv.</a>',
    }]
};