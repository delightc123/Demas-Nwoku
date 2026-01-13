'use client';

import { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from './Lightbox.module.css';

interface LightboxProps {
    src: string;
    alt: string;
    isOpen: boolean;
    onClose: () => void;
}

export default function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
    const [mounted, setMounted] = useState(false);

    // Ensure we only render portal on client side
    useEffect(() => {
        setMounted(true);
    }, []);

    // Close on escape key
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, handleKeyDown]);

    if (!isOpen || !mounted) return null;

    // Use createPortal to render outside the GSAP-manipulated DOM
    return createPortal(
        <div className={styles.overlay} onClick={onClose}>
            <button className={styles.closeButton} onClick={onClose} aria-label="Close">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                </svg>
            </button>

            <div className={styles.imageContainer} onClick={(e) => e.stopPropagation()}>
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 90vw, 80vw"
                    priority
                />
            </div>
        </div>,
        document.body
    );
}
