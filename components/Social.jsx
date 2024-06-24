import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope  } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: '/github' },
    { icon: <FaLinkedinIn />, path: '/linkedin' },
    { icon: <FaTwitter />, path: '/twitter' },
    { icon: <FaEnvelope  />, path: '/email' },
];

const Social = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => (
                <Link key={index} href={item.path}>
                    <div className={iconStyles}>
                        {item.icon}
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default Social;
