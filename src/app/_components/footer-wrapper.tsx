'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { Footer } from './footer'

const FooterWrapper = () => {
    const pathname = usePathname()
    const footerExcludedRoutes = ['/intelligence', '/sign-in', '/sign-up']
    const shouldHideFooter = footerExcludedRoutes.some((route) => pathname.startsWith(route))

    if (shouldHideFooter) {
        return null
    }
    return (
        <Footer />
    )
}

export default FooterWrapper