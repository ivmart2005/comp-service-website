import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/assetPath';
import styles from './Contacts.module.css';

export const Contacts = () => {
  return (
    <section id="contacts" className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.headerTitle}>
          <span className={styles.titleMarker} />
          <h2 className={styles.title}>Контакты и карта</h2>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.infoContent}>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#0a99a8"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Наш офис в Перми</span>
                  <p className={styles.infoText}>б-р Гагарина, 87<br /><span>1 этаж, вход с торца</span></p>
                </div>
              </li>

              <li className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="#0a99a8"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Телефон</span>
                  <p className={styles.infoText}>+7 (342) 294-26-23</p>
                </div>
              </li>

              <li className={styles.infoItem}>
                <div className={styles.iconWrapper}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="#0a99a8"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.infoLabel}>Часы работы</span>
                  <p className={styles.infoText}>Пн–Пт 10:00–19:00<br />Сб–Вс — по договоренности</p>
                </div>
              </li>
            </ul>

            <Link 
              href="https://yandex.ru/maps/?text=Пермь,+бульвар+Гагарина,+87" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.actionButton}
            >
              Открыть в Яндекс.Картах →
            </Link>
          </div>

          <a 
            href="https://yandex.ru/maps/?text=Пермь,+бульвар+Гагарина,+87" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.mapWrapper}
          >
            <Image
              src={assetPath('/images/map-preview.jpg')}
              alt="Карта проезда"
              fill
              sizes="(max-width: 968px) 100vw, 50vw"
              className={styles.mapImage}
            />
            <div className={styles.mapOverlay}>
              <div className={styles.mapPinBox}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#0a99a8" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"/>
                </svg>
                <span>Компьютер Сервис</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};