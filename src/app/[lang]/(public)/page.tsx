import getDictionary from '@/i18n/getDictionary';
import React from 'react';
import Contact from '@/components/Contact';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';

export default async function Home({
  params,
}: {
  params: Promise<{
    lang: string;
  }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return (
    <>
      <main className={'bg-background text-text font-body min-h-screen'}>
        <Header dict={dict} />
        <header className={'text-highlight text-center py-12'}>
          <h1 className={'text-8xl absolute top-1/2 left-1/2 -translate-x-1/2 font-heading text-bold'}>
            {dict.heading}
          </h1>
        </header>
        <section className={'py-12 px-6'} id={'about'}>
          <div className={'inner'}>
            <h2 className={'text-3xl font-heading text-accent'}>{dict.about.title}</h2>
            {dict.about.paragraphs.map((paragraph, index) =>
              typeof paragraph === 'string' ? (
                <p className={'p-4'} key={index}>
                  {paragraph}
                </p>
              ) : (
                <React.Fragment key={index}>
                  {paragraph.timeline.map((item, index) => (
                    <React.Fragment key={`timeline-${index}`}>
                      <h3 className={'p-4 text-accent text-lg font-bold font-heading'}>{item.year}</h3>
                      <ul className={'list-inside list-disc px-8'}>
                        {item.achievements.map((achievement, index) => (
                          <li key={`achievement-${index}`}>{achievement}</li>
                        ))}
                      </ul>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ),
            )}
          </div>
        </section>
        <section className={'py-12 px-6 bg-secondary text-highlight'} id={'mission'}>
          <div className={'inner'}>
            <h2 className={'text-3xl font-heading'}>{dict.mission.title}</h2>
            <div>
              {dict.mission.paragraphs.map((paragraph, index) => (
                <p className={'p-4'} key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
        <Gallery />
        <Contact dict={dict} />
      </main>
    </>
  );
}
