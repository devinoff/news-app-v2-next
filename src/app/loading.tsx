import {ReactElement} from "react";
import {SpinnerIcon} from "@phosphor-icons/react/ssr";

export default function Loading(): ReactElement {

    return (
        <div className='w-full max-w-3xl mx-auto h-full min-h-dvh flex flex-col justify-center items-center px-8'>
            <SpinnerIcon className='animate-spin' size={48} />
        </div>
    );
}