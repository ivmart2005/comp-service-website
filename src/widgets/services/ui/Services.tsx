import Image from 'next/image';
import Link from 'next/link';
import styles from './Services.module.css';
import { assetPath } from '@/lib/assetPath';

const servicesData = [
  {
    title: 'Восстановление после залития',
    description: 'Профессиональная чистка и замена компонентов',
    image: assetPath('/images/mock-picture.jpg'),
    link: '#contacts',
    linkText: 'Подробнее →',
  },
  {
    title: 'Ремонт цепей питания',
    description: 'Замена контроллеров и разъёмов питания',
    image: assetPath('/images/mock-picture-2.jpg'),
    link: '#contacts',
    linkText: 'Подробнее →',
  },
  {
    title: 'Замена экрана и петель',
    description: 'Модели с сенсорным управлением и матрицы',
    image: assetPath('/images/mock-picture-3.jpg'),
    link: '#contacts',
    linkText: 'Подробнее →',
  },
  {
    title: 'Восстановление после залития',
    description: 'Профессиональная чистка и замена компонентов',
    image: assetPath('/images/mock-picture.jpg'),
    link: '#contacts',
    linkText: 'Подробнее →',
  },
  {
    title: 'Другие услуги',
    description: 'Апгрейд, настройка, чистка от пыли',
    image: assetPath('/images/mock-picture-4.jpg'),
    link: '#services',
    linkText: 'Все услуги →',
  },
];

export const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.headerTitle}>
          <span className={styles.titleMarker} />
          <h2 className={styles.title}>Наши услуги</h2>
        </div>

        <div className={styles.grid}>
          {servicesData.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={90}
                  className={styles.cardImage}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDescription}>{item.description}</p>
              </div>

              <Link href={item.link} className={styles.cardLink}>
                {item.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};