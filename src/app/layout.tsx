import {Header} from "./header.tsx";
import {ReactNode} from "react";
import {Footer} from "./footer.tsx";

export const Layout = ({content} : {content?: ReactNode}) => {
    return <div className={'flex flex-col h-screen bg-background'}>
        <Header/>
        <div className={'flex-grow'}>
            {content}
        </div>
        <Footer/>
    </div>
}