import React from 'react'

function SecondaryNav() {
    return (
        <div className=" bg-darkestGrey py-20">
            <nav className=" container">
                <ul className="flex flex-col sm:flex-row gap-3  sm:gap-11 text-xl font-righteous text-accent font-bold items-center cursor-pointer  ">
                    <li className=" bg-cheesyYellow px-2 py-2 rounded-xl text-grey hover:text-saucyRed " >Popular</li>
                    <li className=" hover:text-saucyRed transition-all duration-300 ">Upvoted</li>
                    <li className="hover:text-saucyRed transition-all duration-300">Discussed</li>
                    <li className=" hover:text-saucyRed  transition-all duration-300 ">Recent</li>
                </ul>
            </nav>
        </div>
    )
}

export default SecondaryNav
