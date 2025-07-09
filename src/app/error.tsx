'use client';

import {ReactElement, useEffect} from 'react';
import {messages} from "@/app/messages";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }): ReactElement {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className='w-full max-w-3xl mx-auto h-full min-h-dvh flex flex-col justify-center items-center px-8'>
            <h1 className=''>
                {messages.errorHeading}
            </h1>
            {messages.errorParagraph}
        </div>
    );
}