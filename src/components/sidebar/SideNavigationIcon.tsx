import React from 'react'
import { IconType } from "react-icons";
import { Link, useNavigate } from "react-router-dom";

interface Props {
    href: string
    icon: IconType
    text: string
}

const SideNavigationIcon: React.FC<Props> = ({ icon: Icon, text = 'navlink', href }) => {

    return (
        <>
            <Link className='my-2' to={href} >
                <div className='sidebar-icon group'>
                        <div className="flex items-start justify-center w-full">
                            <Icon />
                        </div>
                    {/* <div className="flex items-start justify-center w-full">
                    <Link className='mx-2 font-semibold italic text-lg' to={href} ><Icon /></Link>
                    </div> */}
                    <div className="sidebar-tooltip group-hover:scale-100">
                        {text}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default SideNavigationIcon;