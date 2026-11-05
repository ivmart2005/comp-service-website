import Image from 'next/image';
import styles from './FeedbackBanner.module.css';
import { assetPath } from '@/lib/assetPath';

export const FeedbackBanner = () => {
  return (
    <section className={styles.bannerContainer}>
      <div className={styles.headerTitle}>
        <div className={styles.titleMarker} />
        <h2 className={styles.titleSection}>Поддержка</h2>
      </div>

      <div className={styles.bannerCard}>
        <div className={styles.imageWrapper}>
          <Image
            src={assetPath('/images/contacts-form.jpg')}
            alt="Ремонт электроники"
            fill
            unoptimized
            className={styles.bannerImage}
            priority
          />
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.textContent}>
            <h3 className={styles.title}>Нужна консультация?</h3>
            <p className={styles.subtitle}>
              Напишите нам — ответим на вопросы и поможем выбрать решение.
            </p>
          </div>

          <div className={styles.divider} />

          <button type="button" className={styles.actionButton}>
            Задать вопрос
            <svg 
              className={styles.arrowIcon} 
              width="18" 
              height="18" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};