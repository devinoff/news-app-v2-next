'use client';

import {ReactElement, useEffect} from 'react';
import {messages} from "@/messages";
import {ArrowsCounterClockwiseIcon} from "@phosphor-icons/react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }): ReactElement {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='w-full max-w-3xl mx-auto h-full min-h-dvh flex flex-col justify-center items-center gap-8 px-8'>
            <h1 className='text-3xl font-semibold'>
                {messages.errorHeading}
            </h1>
            <p className='text-lg font-medium'>
                {messages.errorParagraph}
            </p>
            <button onClick={reset} className='flex items-center gap-2 bg-primary text-lg font-semibold px-6 py-3 rounded-md cursor-pointer hover:scale-[0.98] transform transition-[scale] duration-200 ease-in-out'>
                <ArrowsCounterClockwiseIcon size={20} weight='bold' />
                {messages.errorTryAgain}
            </button>
        </div>
    );
}