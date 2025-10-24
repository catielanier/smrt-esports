import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import NavArrows from '@/components/NavArrows';
import Sponsors from '@/components/Sponsors';
import getDictionary from '@/i18n/getDictionary';
import { parseRichText } from '@/lib/parseRichText';
import Link from 'next/link';
import React from 'react';

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
      <NavArrows />
      <main className={'bg-background text-text font-body min-h-screen'}>
        <Header dict={dict} />
        <header className={'text-highlight text-center justify-center items-center flex'} id={'home'}>
          <video
            autoPlay={true}
            controls={false}
            loop={true}
            muted={true}
            disableRemotePlayback
            disablePictureInPicture
            className="pointer-events-none"
            playsInline={true}
          >
            <source src="/smrt.webm" type="video/webm" />
            <source src="/smrt.mp4" type="video/mp4" />
          </video>
        </header>
        <section className={'pb-12 pt-16 px-6'} id={'about'}>
          <div className={'inner'}>
            <h2 className={'ml-4 md:ml-0 text-3xl font-heading text-accent'}>{dict.about.title}</h2>
            {dict.about.paragraphs.map((paragraph, index) =>
              typeof paragraph === 'string' ? (
                parseRichText(paragraph)
              ) : (
                <React.Fragment key={index}>
                  {paragraph.timeline.map((item, index) => (
                    <React.Fragment key={`timeline-${index}`}>
                      <h3 className={'p-4 text-accent text-lg font-bold font-heading'}>{item.year}</h3>
                      <ul className={'list-inside list-disc px-8'}>
                        {item.achievements.map((achievement, index) => (
                          <li key={`achievement-${index}`}>{parseRichText(achievement)}</li>
                        ))}
                      </ul>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ),
            )}
          </div>
        </section>
        <section className={'pb-12 pt-16 px-6 bg-secondary text-highlight'} id={'mission'}>
          <div className={'inner'}>
            <h2 className={'ml-4 md:ml-0 text-3xl font-heading'}>{dict.mission.title}</h2>
            <div>
              {dict.mission.paragraphs.map((paragraph, index) => (
                <p className={'p-4'} key={index}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-background pb-12 pt-16 px-6" id="events">
          <div className="inner">
            <h2 className={'ml-4 md:ml-0 text-3xl font-heading text-accent'}>{dict.header.events}</h2>
            <div className="md:grid grid-cols-4 gap-4 pt-6">
              {dict.events.map((event, idx) => (
                <div
                  key={idx}
                  className={`grid grid-rows-[1fr,2fr] h-full px-4 py-5 ${idx % 2 === 0 ? 'bg-accent text-background' : 'bg-secondary'}`}
                >
                  <div className="flex justify-center items-center overflow-hidden">
                    <a href={event.url} target="_blank" rel="noreferrer noopener">
                      <img src={`/${event.logo}`} alt={event.name} className="max-h-full w-auto" />
                    </a>
                  </div>

                  <div>
                    <h3 className={`font-heading py-4 text-2xl ${idx % 2 === 0 ? 'text-secondary' : 'text-accent'}`}>
                      {event.name}
                    </h3>
                    {event.paragraphs.map((p, i) => (
                      <p key={i} className="text-left">
                        {p}
                      </p>
                    ))}
                    {event.sublinks.map((link) => (
                      <React.Fragment key={link.linkText}>
                        <p
                          className={`font-heading py-0 text-m text-left ${idx % 2 === 0 ? 'text-secondary' : 'text-accent'}`}
                        >
                          {link.text}
                        </p>
                        <p
                          className={`font-heading py-2 text-sm text-left underline ${idx % 2 === 0 ? 'text-secondary' : 'text-accent'}`}
                        >
                          <a href={link.url} className={idx % 2 === 0 ? 'text-background' : undefined}>
                            {link.linkText}
                          </a>
                        </p>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Gallery />
        <Sponsors dict={dict} />
        <Contact dict={dict} />
      </main>
      <footer className="bg-secondary text-highlight text-center py-6 font-body">
        <p className="mb-2">
          &copy; 2025 {dict.footer.name}. {dict.footer.rights}
        </p>
        <p className="mb-2">{dict.footer.landAcknowledgement}</p>
        <Link href="/contest-rules" className="underline hover:text-accent transition-colors">
          {dict.footer.viewRules}
        </Link>
      </footer>
    </>
  );
}
