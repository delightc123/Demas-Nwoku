'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './HeroCarousel.module.css';
import Lightbox from '@/components/ui/Lightbox';

// Register GSAP plugin
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export interface ExhibitionSlide {
    id: string;
    type?: string;
    heading?: string;
    subheading?: string;
    text?: string;
    emphasisText?: string;
    bulletPoints?: string[];
    backgroundImage?: string;
    backgroundColor?: string;
    circularFrames?: string[];
}

interface HeroCarouselProps {
    heroTitle?: string;
    heroSubtitle?: string;
    slides?: ExhibitionSlide[];
}

export default function HeroCarousel({
    heroTitle = "MKPUGHE",
    heroSubtitle = "His Roots, His Heartbeat, His Legacy",
    slides = []
}: HeroCarouselProps) {
    const heroRef = useRef<HTMLDivElement>(null);
    const heroTextRef = useRef<HTMLHeadingElement>(null);
    const heroBgRef = useRef<HTMLDivElement>(null);
    const scrollBadgeRef = useRef<HTMLDivElement>(null);
    const sectionsContainerRef = useRef<HTMLDivElement>(null);

    // Lightbox state
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);
    // Hero title animation state
    const [isHeroAnimated, setIsHeroAnimated] = useState(false);

    // Get first slide for hero background
    const heroSlide = slides.length > 0 ? slides[0] : null;
    // Remaining slides for floor sections (skip first hero slide)
    const floorSlides = slides.slice(1);

    // Animation variant based on slide type
    const getAnimationVariant = (type?: string): string => {
        switch (type) {
            case 'quote':
            case 'legacy':
                return 'typewriter';
            case 'story':
            case 'journey':
                return 'slideIn';
            case 'roots':
            case 'heartbeat':
                return 'stagger';
            case 'art':
                return 'zoomReveal';
            case 'conclusion':
            case 'ending':
                return 'fadeBlur';
            default:
                return 'default';
        }
    };

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const heroSection = heroRef.current;
        const heroText = heroTextRef.current;
        const heroBg = heroBgRef.current;
        const scrollBadge = scrollBadgeRef.current;
        const sectionsContainer = sectionsContainerRef.current;

        if (!heroSection || !heroText || !heroBg || !scrollBadge || !sectionsContainer) return;

        const ctx = gsap.context(() => {
            // ============================================
            // HERO Z-AXIS ZOOM EFFECT
            // ============================================

            gsap.to(heroText, {
                scale: 1.5,
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                    onEnter: () => setIsHeroAnimated(true),
                    onLeaveBack: () => setIsHeroAnimated(false),
                    pin: true,
                    pinSpacing: true,
                }
            });

            gsap.to(heroBg, {
                scale: 1.3,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                }
            });

            gsap.to(scrollBadge, {
                x: '35vw',
                opacity: 0,
                ease: 'none',
                scrollTrigger: {
                    trigger: heroSection,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: 1,
                }
            });

            // ============================================
            // FLOOR STACKING SECTIONS WITH UNIQUE ANIMATIONS
            // ============================================

            const roomSections = sectionsContainer.querySelectorAll(`.${styles.roomSection}`);

            roomSections.forEach((section, index) => {
                const bgImage = section.querySelector(`.${styles.roomBackground}`);
                const overlay = section.querySelector(`.${styles.roomOverlay}`);
                const content = section.querySelector(`.${styles.roomContent}`);
                const heading = section.querySelector(`.${styles.roomHeading}`);
                const text = section.querySelector(`.${styles.roomText}`);
                const emphasis = section.querySelector(`.${styles.roomEmphasis}`);
                const circularFrames = section.querySelectorAll(`.${styles.circularFrame}`);
                const slideType = floorSlides[index]?.type;
                const animVariant = getAnimationVariant(slideType);

                // Pin section
                ScrollTrigger.create({
                    trigger: section,
                    start: 'top top',
                    end: '+=100%',
                    pin: true,
                    pinSpacing: index === roomSections.length - 1,
                });

                // Background animation varies by type
                if (bgImage) {
                    switch (animVariant) {
                        case 'slideIn':
                            // Story/Journey - Ken Burns pan effect
                            gsap.fromTo(bgImage,
                                { scale: 1.2, x: '-5%' },
                                {
                                    scale: 1.1,
                                    x: '5%',
                                    ease: 'none',
                                    scrollTrigger: {
                                        trigger: section,
                                        start: 'top top',
                                        end: 'bottom top',
                                        scrub: 2,
                                    }
                                }
                            );
                            break;

                        case 'zoomReveal':
                            // Art Piece - dramatic zoom OUT (reverse)
                            gsap.fromTo(bgImage,
                                { scale: 1.4 },
                                {
                                    scale: 1,
                                    ease: 'power2.out',
                                    scrollTrigger: {
                                        trigger: section,
                                        start: 'top top',
                                        end: 'bottom top',
                                        scrub: 1.5,
                                    }
                                }
                            );
                            break;

                        case 'typewriter':
                            // Quote - subtle pulse/breathe effect
                            gsap.fromTo(bgImage,
                                { scale: 1.05 },
                                {
                                    scale: 1.15,
                                    ease: 'sine.inOut',
                                    scrollTrigger: {
                                        trigger: section,
                                        start: 'top top',
                                        end: 'bottom top',
                                        scrub: 2,
                                    }
                                }
                            );
                            break;

                        case 'fadeBlur':
                            // Conclusion - slow push in with fade
                            gsap.fromTo(bgImage,
                                { scale: 1, filter: 'brightness(0.7)' },
                                {
                                    scale: 1.2,
                                    filter: 'brightness(1)',
                                    ease: 'power1.in',
                                    scrollTrigger: {
                                        trigger: section,
                                        start: 'top top',
                                        end: 'bottom top',
                                        scrub: 2,
                                    }
                                }
                            );
                            break;

                        default:
                            // Default zoom
                            gsap.to(bgImage, {
                                scale: 1.15,
                                ease: 'none',
                                scrollTrigger: {
                                    trigger: section,
                                    start: 'top top',
                                    end: 'bottom top',
                                    scrub: 1.5,
                                }
                            });
                    }
                }

                // Overlay animation for dramatic sections
                if (overlay && (animVariant === 'fadeBlur' || animVariant === 'typewriter')) {
                    gsap.fromTo(overlay,
                        { opacity: 0.3 },
                        {
                            opacity: 1,
                            ease: 'power2.in',
                            scrollTrigger: {
                                trigger: section,
                                start: 'top 60%',
                                end: 'top 10%',
                                scrub: 1,
                            }
                        }
                    );
                }

                // Content animation based on variant
                if (content) {
                    switch (animVariant) {
                        case 'slideIn':
                            // Slide from left with 3D rotation
                            gsap.fromTo(content,
                                { x: -150, opacity: 0, rotateY: -25 },
                                {
                                    x: 0,
                                    opacity: 1,
                                    rotateY: 0,
                                    ease: 'power3.out',
                                    scrollTrigger: {
                                        trigger: section,
                                        start: 'top 75%',
                                        end: 'top 25%',
                                        scrub: 1.2,
                                    }
                                }
                            );
                            // Heading slides in separately
                            if (heading) {
                                gsap.fromTo(heading,
                                    { x: -200, opacity: 0 },
                                    {
                                        x: 0,
                                        opacity: 1,
                                        ease: 'power3.out',
                                        scrollTrigger: {
                                            trigger: section,
                                            start: 'top 80%',
                                            end: 'top 35%',
                                            scrub: 1,
                                        }
                                    }
                                );
                            }
                            break;

                        case 'zoomReveal':
                            // Cinematic zoom reveal with staggered elements
                            gsap.fromTo(content,
                                { scale: 0.6, opacity: 0, y: 100 },
                                {
                                    scale: 1,
                                    opacity: 1,
                                    y: -20,
                                    ease: 'power2.out',
                                    scrollTrigger: {
                                        trigger: section,
                                        start: 'top 85%',
                                        end: 'top 20%',
                                        scrub: 1.5,
                                    }
                                }
                            );
                            // Heading zooms in faster
                            if (heading) {
                                gsap.fromTo(heading,
                                    { scale: 0.5, opacity: 0 },
                                    {
                                        scale: 1,
                                        opacity: 1,
                                        ease: 'back.out(1.5)',
                                        scrollTrigger: {
                                            trigger: section,
                                            start: 'top 90%',
                                            end: 'top 40%',
                                            scrub: 1,
                                        }
                                    }
                                );
                            }
                            break;

                        case 'fadeBlur':
                            // Cinematic fade with letterbox feel
                            gsap.fromTo(content,
                                { y: 150, opacity: 0 },
                                {
                                    y: 0,
                                    opacity: 1,
                                    ease: 'power3.out',
                                    scrollTrigger: {
                                        trigger: section,
                                        start: 'top 70%',
                                        end: 'top 15%',
                                        scrub: 2,
                                    }
                                }
                            );
                            // Emphasis fades in last with glow
                            if (emphasis) {
                                gsap.fromTo(emphasis,
                                    { y: 50, opacity: 0 },
                                    {
                                        y: 0,
                                        opacity: 1,
                                        ease: 'power2.out',
                                        scrollTrigger: {
                                            trigger: section,
                                            start: 'top 50%',
                                            end: 'top 10%',
                                            scrub: 1.5,
                                        }
                                    }
                                );
                            }
                            break;

                        case 'stagger':
                            // Elements appear one by one
                            gsap.fromTo(content,
                                { y: 80, opacity: 0 },
                                {
                                    y: 0,
                                    opacity: 1,
                                    ease: 'power2.out',
                                    scrollTrigger: {
                                        trigger: section,
                                        start: 'top 80%',
                                        end: 'top 30%',
                                        scrub: 1,
                                    }
                                }
                            );

                            // Text and emphasis stagger
                            if (text) {
                                gsap.fromTo(text,
                                    { x: 30, opacity: 0 },
                                    {
                                        x: 0,
                                        opacity: 1,
                                        ease: 'power2.out',
                                        scrollTrigger: {
                                            trigger: section,
                                            start: 'top 65%',
                                            end: 'top 25%',
                                            scrub: 1,
                                        }
                                    }
                                );
                            }

                            // Circular frames spiral in
                            if (circularFrames.length > 0) {
                                circularFrames.forEach((frame, i) => {
                                    gsap.fromTo(frame,
                                        {
                                            scale: 0,
                                            opacity: 0,
                                            rotate: -90 + (i * 30),
                                            x: 50
                                        },
                                        {
                                            scale: 1,
                                            opacity: 1,
                                            rotate: 0,
                                            x: 0,
                                            ease: 'back.out(2.5)',
                                            scrollTrigger: {
                                                trigger: section,
                                                start: `top ${75 - i * 8}%`,
                                                end: `top ${35 - i * 8}%`,
                                                scrub: 0.6,
                                            }
                                        }
                                    );
                                });
                            }
                            break;

                        case 'typewriter':
                            // Quote - dramatic center reveal
                            gsap.fromTo(content,
                                { y: 120, opacity: 0, scale: 0.9 },
                                {
                                    y: 0,
                                    opacity: 1,
                                    scale: 1,
                                    ease: 'power3.out',
                                    scrollTrigger: {
                                        trigger: section,
                                        start: 'top 80%',
                                        end: 'top 20%',
                                        scrub: 1.5,
                                    }
                                }
                            );
                            // Text appears with slight delay
                            if (text) {
                                gsap.fromTo(text,
                                    { opacity: 0, y: 30 },
                                    {
                                        opacity: 1,
                                        y: 0,
                                        ease: 'power2.out',
                                        scrollTrigger: {
                                            trigger: section,
                                            start: 'top 60%',
                                            end: 'top 15%',
                                            scrub: 1.2,
                                        }
                                    }
                                );
                            }
                            break;

                        default:
                            // Default rise animation
                            gsap.fromTo(content,
                                { y: 80, opacity: 0 },
                                {
                                    y: -30,
                                    opacity: 1,
                                    ease: 'none',
                                    scrollTrigger: {
                                        trigger: section,
                                        start: 'top 80%',
                                        end: 'top 20%',
                                        scrub: 1,
                                    }
                                }
                            );
                    }
                }
            });

        }, heroSection);

        return () => {
            ctx.revert();
        };
    }, [slides, floorSlides]);

    return (
        <>
            {/* Lightbox for circular frame images */}
            <Lightbox
                src={lightboxImage || ''}
                alt="Gallery image"
                isOpen={!!lightboxImage}
                onClose={() => setLightboxImage(null)}
            />

            {/* ============================================ */}
            {/* HERO INTRO SECTION - Z-AXIS ZOOM */}
            {/* ============================================ */}
            <section ref={heroRef} className={styles.heroSection}>
                <div
                    ref={heroBgRef}
                    className={styles.heroBackground}
                    style={{
                        backgroundImage: heroSlide?.backgroundImage
                            ? `url(${heroSlide.backgroundImage})`
                            : undefined,
                        backgroundColor: heroSlide?.backgroundColor || '#060608',
                    }}
                />

                <div className={styles.heroContent}>
                    <h1 ref={heroTextRef} className={styles.heroTitle}>
                        {heroTitle}
                    </h1>
                    <p className={styles.heroSubtitle}>{heroSubtitle}</p>
                </div>

                <div ref={scrollBadgeRef} className={styles.scrollBadge}>
                    <svg className={styles.scrollBadgeCircle} viewBox="0 0 100 100">
                        <defs>
                            <path
                                id="circlePath"
                                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                            />
                        </defs>
                        <text className={styles.scrollBadgeText}>
                            <textPath href="#circlePath">
                                SCROLL • SCROLL • SCROLL • SCROLL •
                            </textPath>
                        </text>
                    </svg>
                    <div className={styles.scrollArrow}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 5v14M19 12l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* ============================================ */}
            {/* FLOOR STACKING SECTIONS */}
            {/* ============================================ */}
            <div ref={sectionsContainerRef} className={styles.sectionsContainer}>
                {floorSlides.map((slide, index) => (
                    <section
                        key={slide.id}
                        id={slide.id}
                        className={`${styles.roomSection} ${styles[`variant-${getAnimationVariant(slide.type)}`] || ''}`}
                        style={{ zIndex: 10 + index }}
                        data-type={slide.type}
                    >
                        <div
                            className={styles.roomBackground}
                            style={{
                                backgroundColor: slide.backgroundColor || '#060608',
                                backgroundImage: slide.backgroundImage
                                    ? `url(${slide.backgroundImage})`
                                    : undefined,
                            }}
                        />

                        <div className={styles.roomOverlay} />

                        <div className={styles.roomContent}>
                            {slide.heading && (
                                <h2 className={styles.roomHeading}>{slide.heading}</h2>
                            )}
                            {slide.subheading && (
                                <p className={styles.roomSubheading}>{slide.subheading}</p>
                            )}
                            {slide.text && (
                                <p className={styles.roomText}>{slide.text}</p>
                            )}
                            {slide.emphasisText && (
                                <p className={styles.roomEmphasis}>{slide.emphasisText}</p>
                            )}
                            {slide.bulletPoints && slide.bulletPoints.length > 0 && (
                                <ul className={styles.bulletList}>
                                    {slide.bulletPoints.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Circular Frames - Clickable with Lightbox */}
                        {slide.circularFrames && slide.circularFrames.length > 0 && (
                            <div className={styles.circularFramesContainer}>
                                {slide.circularFrames.map((frame, i) => (
                                    <button
                                        key={i}
                                        className={styles.circularFrame}
                                        onClick={() => setLightboxImage(frame)}
                                        aria-label={`View gallery image ${i + 1}`}
                                    >
                                        <Image
                                            src={frame}
                                            alt={`Gallery image ${i + 1}`}
                                            fill
                                            className={styles.circularFrameImage}
                                        />
                                    </button>
                                ))}
                            </div>
                        )}

                        <div className={styles.floorIndicator}>
                            <span className={styles.currentFloor}>{String(index + 1).padStart(2, '0')}</span>
                            <span className={styles.floorDivider}>/</span>
                            <span className={styles.totalFloors}>{String(floorSlides.length).padStart(2, '0')}</span>
                        </div>
                    </section>
                ))}
            </div>
        </>
    );
}
