import { Header } from '@/widgets/header';
import { Hero } from '@/widgets/hero';
import { Services } from '@/widgets/services';
import { Contacts } from '@/widgets/contacts';
import { FeedbackBanner } from '@/widgets/feedback-banner';

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Hero />
      <Services />
      <Contacts />
      <FeedbackBanner />
    </main>
  );
}