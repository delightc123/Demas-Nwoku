import Image from 'next/image';
import styles from './Footer.module.css';

interface FooterLink {
    label: string;
    href: string;
}

interface FooterProps {
    brandName?: string;
    brandLogo?: string;
    secondaryLogo?: string;
    tagline?: string;
    navLinks?: FooterLink[];
    copyrightNotice?: string;
}

const defaultNavLinks: FooterLink[] = [
    { label: 'Story', href: '#the-story' },
    { label: 'Journey', href: '#the-journey' },
    { label: 'Art Piece', href: '#art-piece' },
    { label: 'Credits', href: '#credits' },
];

export default function Footer({
    brandName = 'MKPUGHE',
    brandLogo = '/images/logo_3d_gold.png',
    secondaryLogo = '/images/logo1.jpeg',
    tagline = 'His Roots, His Heartbeat, His Legacy',
    navLinks = defaultNavLinks,
    copyrightNotice,
}: FooterProps) {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Logos Row */}
                <div className={styles.logosRow}>
                    {brandLogo && (
                        <Image
                            src={brandLogo}
                            alt={brandName}
                            width={150}
                            height={150}
                            className={styles.logoImage}
                        />
                    )}
                    {secondaryLogo && (
                        <Image
                            src={secondaryLogo}
                            alt="New Culture Studios"
                            width={110}
                            height={110}
                            className={styles.logoImage}
                        />
                    )}
                </div>

                {/* Brand Info */}
                <div className={styles.brandInfo}>
                    <h3 className={styles.brandName}>{brandName}</h3>
                    <p className={styles.tagline}>{tagline}</p>
                </div>

                {/* Navigation */}
                <nav className={styles.navList}>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className={styles.navLink}>
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Copyright */}
            <div className={styles.copyright}>
                <p>© {currentYear} {brandName}. All rights reserved.</p>
                {copyrightNotice && (
                    <p className={styles.copyrightNotice}>{copyrightNotice}</p>
                )}
            </div>
        </footer>
    );
}
