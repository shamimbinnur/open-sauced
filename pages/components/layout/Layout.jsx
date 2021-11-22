import React from 'react'
import LayoutToggle from './LayoutToggle'
import Modal from './Modal'
import PrimaryNav from './PrimaryNav'
import SecondaryNav from './SecondaryNav'
import Head from 'next/head'

function Layout({children}) {
    return (
        <>  
            <Head>
                <title>Open Sauced</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

            </Head>

            <PrimaryNav/>
            <Modal/>
            <SecondaryNav/>
            <LayoutToggle/>
            {children}
        </>
    )
}

export default Layout
