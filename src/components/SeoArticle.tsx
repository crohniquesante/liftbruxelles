import { SEO_ARTICLE } from "@/lib/content";

function renderParagraph(text: string, index: number) {
  if (text.startsWith("## ")) {
    return (
      <h2
        key={index}
        className="mt-10 text-2xl font-bold tracking-tight text-slate-900 first:mt-0"
      >
        {text.replace("## ", "")}
      </h2>
    );
  }

  const html = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\n/g, "<br />");

  return (
    <p
      key={index}
      className="mt-4 text-base leading-relaxed text-slate-600"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function SeoArticle() {
  return (
    <section
      id="guide"
      className="border-t border-slate-100 bg-white py-20 sm:py-28"
      aria-labelledby="seo-article-title"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Guide expert
        </p>
        <h2
          id="seo-article-title"
          className="mt-3 text-3xl font-bold tracking-tight text-slate-900"
        >
          {SEO_ARTICLE.title}
        </h2>
        <div className="prose-custom mt-8">
          {SEO_ARTICLE.paragraphs.map((p, i) => renderParagraph(p, i))}
        </div>
      </div>
    </section>
  );
}
