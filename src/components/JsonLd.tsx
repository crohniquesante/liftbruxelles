export function JsonLd({ data }: { data: Record<string, unknown>[] }) {
  const payload = {
    "@context": "https://schema.org",
    "@graph": data,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
