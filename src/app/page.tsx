import {GithubLogoIcon, NewspaperIcon} from "@phosphor-icons/react/ssr";
import Story from "@/components/Story";
import WeatherWidget from "@/components/WeatherWidget";
import {BriefingInterface} from "../types";
import {messages} from "@/app/messages";
import {config} from "@/app/config";

export default async function Home() {
    const briefingResponse = await fetch(config.briefingApiUrl, { next: { revalidate: 300 } });
    if (!briefingResponse.ok) {
        throw new Error(`Failed to load briefing: ${briefingResponse.status} ${briefingResponse.statusText}`);
    }
    const briefing: BriefingInterface = await briefingResponse.json();

    return (
        <div className='w-full min-h-dvh bg-zinc-200 dark:bg-zinc-900 text-black dark:text-white'>
            <div className='w-full h-full max-w-3xl mx-auto flex flex-col items-center gap-16 px-8 pt-32 pb-12'>
                <WeatherWidget />
                <header className='w-full flex flex-col items-center gap-2'>
                    <div className='flex justify-center items-center gap-5 flex-wrap'>
                        <NewspaperIcon size={60} weight='bold' className='text-primary' />
                        <a href='https://zinas.dvx.lv/' className='text-5xl font-bold'>ZIŅAS<small>_dvx</small></a>
                    </div>
                    <small className='text-center text-balance'>{messages.lastTimeUpdated}: {briefing.last_updated_at_formatted}</small>
                    {new Date(briefing.last_updated_at_iso).getTime() < (Date.now() - 12 * 60 * 60 * 1000) && <small className='bg-red-500/20 px-3 py-1.5 border border-red-500/40 rounded-md mt-2 text-center text-balance'>{messages.lastTimeUpdatedWarning}</small>}
                </header>
                <small className='bg-primary/20 px-6 py-4 border border-primary/40 rounded-md text-[14px]'>{messages.disclaimer}</small>
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
                        {messages.footerHeading}
                    </h2>
                    <ul className='mt-8 flex flex-col gap-6 md:px-16'>
                        {messages.footerItems.map((footerItem) => (
                            <li key={footerItem.id}>
                                <h3 className='text-[17px] font-semibold'>{footerItem.heading}</h3>
                                <p className='mt-1 text-[15px]' dangerouslySetInnerHTML={{ __html: footerItem.paragraph }} />
                            </li>
                        ))}
                    </ul>
                    <hr className='mt-12 w-full text-primary' />
                    <div className='mt-12 flex justify-center items-center gap-4'>
                        <a href='https://dvx.lv/'>dvx_lv</a>
                        |
                        <a href='https://github.com/devinoff/news-app-v2-express' className='flex items-center gap-2'><GithubLogoIcon weight='bold' /> express</a>
                        |
                        <a href='https://github.com/devinoff/news-app-v2-next' className='flex items-center gap-2'><GithubLogoIcon weight='bold' /> next</a>
                        |
                        <span>{new Date().getFullYear()}</span>
                    </div>
                </footer>
            </div>
        </div>
    );
}
