import Header from '@/components/Header';
import getDictionary from '@/i18n/getDictionary';
import React from 'react';

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}

export default async function RulesPage({
  params,
}: {
  params: Promise<{
    lang: string;
  }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const rules = dict.rules;

  return (
    <>
      <main className="bg-background text-text font-body min-h-screen">
        <Header dict={dict} />

        <div aria-hidden className="h-[88px] md:h-[96px]" />

        <section className="pb-12 pt-16 px-6 scroll-mt-28 md:scroll-mt-32" id="rules">
          <div className="inner max-w-5xl mx-auto">
            {/* Page Title & Metadata */}
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-heading text-accent">{rules.title}</h1>
              {rules.subtitle && <p className="text-highlight font-heading mt-1">{rules.subtitle}</p>}
              {rules.lastUpdated && (
                <p className="text-sm opacity-75 mt-2">
                  {lang === 'fr'
                    ? 'Dernière mise à jour'
                    : lang === 'es'
                      ? 'Última actualización'
                      : lang === 'ja'
                        ? '最終更新日'
                        : lang === 'ko'
                          ? '최종 업데이트'
                          : lang === 'zh-CN'
                            ? '最后更新'
                            : lang === 'zh-TW' || lang === 'zh-HK' || lang === 'zh-SG'
                              ? '最後更新'
                              : 'Last Updated'}
                  {': '}
                  {rules.lastUpdated}
                </p>
              )}
            </header>

            {/* Ordered list of articles with nested ordered lists for items */}
            <ol className="list-decimal pl-6 space-y-6 marker:text-accent rules-ol">
              {rules.articles.map((article: { heading: string; items: string[] }, idx: number) => (
                <li key={article.heading} className="space-y-2">
                  <h2 id={slugify(article.heading)} className="font-heading text-2xl text-accent">
                    <span aria-hidden className="rule-no font-heading">
                      {idx + 1}.
                    </span>{' '}
                    <span>{article.heading}</span>
                  </h2>

                  {Array.isArray(article.items) && article.items.length > 0 && (
                    <ol className="list-decimal pl-6 space-y-2 rules-subol">
                      {article.items.map((item: string, subIdx: number) => (
                        <li key={`${article.heading}-${subIdx}`} className="rule-item">
                          <p>{item}</p>
                        </li>
                      ))}
                    </ol>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>
    </>
  );
}
