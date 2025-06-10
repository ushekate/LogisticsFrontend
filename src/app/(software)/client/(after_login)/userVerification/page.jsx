'use client';
import { useIsMobile } from "@/hooks/use-mobile";
import { useSidebar } from "@/contexts/SidebarProvider";
import { useEffect } from "react";
import UserVerificationMobile from "./components/mobileView";
import UserVerificationDesktop from "./components/desktopView";



export default function UserVerification() {
    const { setTitle } = useSidebar();
	useEffect(() => {
		setTitle('User Verification Page')
	}, []);

    return(
        <section>
            {
                useIsMobile()?(
                    <UserVerificationMobile />
                ) : (
                    <UserVerificationDesktop />
                )
            }
        </section>
    )
}