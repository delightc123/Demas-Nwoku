import styles from './VisionSection.module.css';

interface Credit {
    role: string;
    name: string;
}

interface VisionSectionProps {
    id?: string;
    tagline?: string;
    headline?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
    credits?: Credit[];
}

export default function VisionSection({
    id = 'credits',
    tagline = 'Credits',
    headline = 'The Legacy Initiative',
    description = 'This project was conceived and produced by The Legacy Initiative.',
    ctaLabel,
    ctaHref,
    credits,
}: VisionSectionProps) {
    return (
        <section id={id} className={styles.section}>
            <div className={styles.container}>
                <span className={styles.tagline}>{tagline}</span>
                <h2 className={styles.headline}>{headline}</h2>
                <p className={styles.description}>{description}</p>

                {/* Credits List */}
                {credits && credits.length > 0 && (
                    <div className={styles.creditsGrid}>
                        {credits.map((credit, index) => (
                            <div key={index} className={styles.creditItem}>
                                <span className={styles.creditRole}>{credit.role}</span>
                                <span className={styles.creditName}>{credit.name}</span>
                            </div>
                        ))}
                    </div>
                )}

                {ctaLabel && ctaHref && (
                    <a href={ctaHref} className={styles.cta}>
                        {ctaLabel}
                        <svg
                            className={styles.arrow}
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M5 12h14" />
                            <path d="m12 5 7 7-7 7" />
                        </svg>
                    </a>
                )}
            </div>
        </section>
    );
}
