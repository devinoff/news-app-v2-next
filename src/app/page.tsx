import {GithubLogoIcon, NewspaperIcon} from "@phosphor-icons/react/ssr";
import Story from "@/components/Story";
import WeatherWidget from "@/components/WeatherWidget";
import {BriefingInterface} from "../types";

export default async function Home() {
    const briefingResponse = await fetch('http://news-api.dvx.lv/api/briefing', { next: { revalidate: 300 } });
    if (!briefingResponse.ok) {
        throw new Error(`Failed to load briefing: ${briefingResponse.status} ${briefingResponse.statusText}`);
    }
    const briefing: BriefingInterface = await briefingResponse.json();

    return (
        <div className='w-full min-h-dvh bg-zinc-200 dark:bg-zinc-900 text-black dark:text-white'>
            <div className='w-full h-full max-w-3xl mx-auto flex flex-col items-center gap-16 px-8 pt-32 pb-12'>
                <WeatherWidget />
                <header className='flex flex-col items-center gap-2'>
                    <div className='flex items-center gap-5'>
                        <NewspaperIcon size={60} weight='bold' className='text-primary' />
                        <a href='https://zinas.dvx.lv/' className='text-5xl font-bold'>ZIŅAS<small>_dvx</small></a>
                    </div>
                    <small>Pēdējo reizi atjaunināts: {new Date(briefing.last_updated_at).toLocaleString('lv-LV', { hour: '2-digit', minute: '2-digit', day: 'numeric', month: 'short', year: 'numeric', hour12: false, timeZone: 'Europe/Riga' })}</small>
                </header>
                <small className='bg-primary/20 px-6 py-4 border border-primary/40 rounded-md text-[14px]'>Šis ziņu apkopojums ir veidots un kategorizēts ar mākslīgā intelekta (Google Gemini 2.5 Flash) palīdzību. Lūdzu, ņemiet vērā, ka MI modeļi var saturēt neprecizitātes vai interpretācijas kļūdas. Lai pārliecinātos par informācijas precizitāti, vienmēr pārbaudiet oriģinālos ziņu avotus, kas norādīti pie katras ziņas.</small>
                <div className='flex flex-col gap-24 sm:gap-16'>
                    {briefing.categories.map((category) => (
                        <div key={category.category_name} className='w-full flex flex-col gap-5'>
                            <h2 className='text-white text-xl font-bold bg-primary px-7 py-2 rounded-md mb-2 w-full sm:w-fit text-center sm:text-left'>{category.category_name}</h2>
                            {category.stories.map((story) => (
                                <Story key={story.sources[0].url} story={story} />
                            ))}
                        </div>
                    ))}
                </div>
                <hr className='w-full text-primary' />
                <footer>
                    <h2 className='text-lg font-semibold text-pretty md:px-8'>
                        Šī vietne piedāvā automatizētu un kategorizētu jaunāko ziņu apkopojumu no vadošajiem Latvijas ziņu portāliem.
                    </h2>
                    <ul className='mt-8 flex flex-col gap-6 md:px-16'>
                        <li>
                            <h3 className='text-[17px] font-semibold'>Kā tas darbojas?</h3>
                            <p className='mt-1 text-[15px]'>Mēs automātiski apkopojam ziņas no vairākām RSS plūsmām. Tās apstrādā Google Gemini mākslīgais intelekts (MI), kas noņem ziņu dublikātus, veido kopsavilkumus, piešķir kategorijas un atfiltrē nepiemērotu saturu (piemēram, reklāmas, horoskopus, intervijas).</p>
                        </li>
                        <li>
                            <h3 className='text-[17px] font-semibold'>Svarīgi par precizitāti:</h3>
                            <p className='mt-1 text-[15px]'>Lai gan mēs esam rūpīgi izstrādājuši instrukcijas MI modelim, tas var kļūdīties vai nepareizi interpretēt informāciju. Tādēļ mēs nevaram garantēt 100% precizitāti un aicinām jūs vienmēr pārbaudīt informāciju oriģinālajā ziņu avotā. Saite uz to ir pievienota zem katra virsraksta.</p>
                        </li>
                        <li>
                            <h3 className='text-[17px] font-semibold'>Kādus avotus mēs izmantojam?</h3>
                            <p className='mt-1 text-[15px]'>Mēs apkopojam ziņas no vadošajiem Latvijas ziņu portāliem: <a href='https://lsm.lv/' className='text-primary hover:underline'>lsm.lv</a>, <a href='https://tvnet.lv/' className='text-primary hover:underline'>tvnet.lv</a>, <a href='https://delfi.lv/' className='text-primary hover:underline'>delfi.lv</a>, <a href='https://apollo.lv/' className='text-primary hover:underline'>apollo.lv</a> un <a href='https://jauns.lv/' className='text-primary hover:underline'>jauns.lv</a>.</p>
                        </li>
                        <li>
                            <h3 className='text-[17px] font-semibold'>Jautājumi vai ieteikumi?</h3>
                            <p className='mt-1 text-[15px]'>Ja jums ir jautājumi vai ierosinājumi, sazinieties ar mums, rakstot uz e-pastu <a href='mailto:info@dvx.lv' className='text-primary hover:underline'>info@dvx.lv</a>.</p>
                        </li>
                    </ul>
                    <hr className='mt-12 w-full text-primary' />
                    <div className='mt-12 flex justify-center items-center gap-4'>
                        <a href='https://dvx.lv/'>dvx_lv</a>
                        |
                        <a href='https://github.com/devinoff/news-app-v2' className='flex items-center gap-2'><GithubLogoIcon weight='bold' /> code</a>
                        |
                        <span>{new Date().getFullYear()}</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}
