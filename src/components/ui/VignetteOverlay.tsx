'use client';

import styles from './VignetteOverlay.module.css';

/**
 * VignetteOverlay Component
 * 
 * Creates a fixed blurred edge effect around the viewport,
 * like a frame or portal that stays fixed while content moves behind it.
 * This is a key visual effect from the Belarosa website.
 */
export default function VignetteOverlay() {
    return (
        <div className={styles.vignetteOverlay} aria-hidden="true" />
    );
}
