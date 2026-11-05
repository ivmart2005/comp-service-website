import Image from 'next/image';
import { ChevronRight } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/background.jpg"
        alt="Ремонт ноутбуков в Перми"
        width={1920}
        height={960}
        priority
        className={styles.bgImage}
      />

      <div className={styles.overlay}>
        <div className={styles.container}>
          <div className={styles.spacer} />
          
          <div className={styles.content}>
            <h1 className={styles.title}>
              Сложная микропайка <br />и профессиональный ремонт ноутбуков{' '}
              <span className={styles.accent}>в&nbsp;Перми</span>
            </h1>

            <p className={styles.description}>
              Восстановление после залития, замена<br />комплектующих, ремонт любой сложности.
            </p>

            <a href="#contacts" className={styles.button}>
            <span className={styles.buttonText}>Связаться с нами</span>
            <ChevronRight size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};