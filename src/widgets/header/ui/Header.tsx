import Link from 'next/link';
import { Cpu, Phone, Menu } from 'lucide-react';
import styles from './Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoGroup}>
          <Cpu className={styles.logoIcon} size={52} strokeWidth={1} />
          <span className={styles.logoText}>
            Компьютер-<span className={styles.logoAccent}>Сервис</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={`${styles.navLink} ${styles.activeLink}`}>
            Главная
          </Link>
          <Link href="#services" className={styles.navLink}>
            Услуги
          </Link>
          <Link href="#prices" className={styles.navLink}>
            Цены
          </Link>
          <Link href="#contacts" className={styles.navLink}>
            Контакты
          </Link>
        </nav>

        <div className={styles.rightSide}>
          <a href="tel:+73422942623" className={styles.phoneBlock}>
            <Phone className={styles.phoneIcon} size={28} strokeWidth={0.1} />
            <div className={styles.phoneInfo}>
              <span className={styles.phoneText}>+7 (342) 294-26-23</span>
              <span className={styles.workHours}>Пн–Пт 9:00 – 19:00</span>
            </div>
          </a>

          <button className={styles.burgerBtn} aria-label="Открыть меню">
            <Menu size={28} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </header>
  );
};