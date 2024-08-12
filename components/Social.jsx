import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter, FaEnvelope  } from 'react-icons/fa';

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/anish9243' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/anish1507/' },
    { icon: <FaTwitter />, path: 'https://x.com/ANSpa2707' },
    { icon: <FaEnvelope  />, path: 'mailto:ravipatel9243@gmail.com' },
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
