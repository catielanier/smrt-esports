import Contact from '@/components/Contact';
import Gallery from '@/components/Gallery';
import Header from '@/components/Header';
import NavArrows from '@/components/NavArrows';
import getDictionary from '@/i18n/getDictionary';
import { parseRichText } from '@/lib/parseRichText';
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
            <div className="md:grid grid-cols-4 gap-[15px] pt-6">
              {dict.events.map((event, index) => (
                <div
                  key={`event-${index}`}
                  className={`px-4 py-5 ${index % 2 === 0 ? 'bg-accent text-background' : 'bg-secondary'}`}
                >
                  <a href={event.url} target="blank" rel="noreferrer noopener">
                    <img src={`/${event.logo}`} alt={event.name} className="w-full" />
                  </a>
                  <h3 className={`font-heading py-4 text-2xl ${index % 2 === 0 ? 'text-secondary' : 'text-accent'}`}>
                    {event.name}
                  </h3>
                  {event.paragraphs.map((paragraph, index) => (
                    <p key={`event-paragraph-${index}}`} className="text-left">
                      {paragraph}
                    </p>
                  ))}
                  {event.sublinks.map(sublink => {
                    <p className=${`font-heading py-0 text-l text-left ${index % 2 === 0 ? 'text-secondary' : 'text-accent'}`}>
                      {sublink.text}
                    </p>
                    <p className=${`font-heading py-2 text-l text-left underline ${index % 2 === 0 ? 'text-secondary' : 'text-accent'}`}>
                      <a className={index % 2 === 0 ? 'text-background' : ''} href={sublink.url}>
                        {sublink.linkText}
                      </a>
                    </p>
                  })}
                </div>
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
