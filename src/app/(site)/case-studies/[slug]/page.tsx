import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/sanity/lib/client";
import {
  CASE_STUDY_BY_SLUG_QUERY,
  ALL_CASE_STUDY_SLUGS_QUERY,
  type CaseStudy,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export async function generateStaticParams() {
  const slugs = (await client.fetch(ALL_CASE_STUDY_SLUGS_QUERY)) as {
    slug: string | null;
  }[];
  return slugs.filter((s) => s.slug).map((s) => ({ slug: s.slug as string }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const caseStudy = await client.fetch<CaseStudy | null>(
    CASE_STUDY_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 3600 } },
  );

  if (!caseStudy) notFound();

  return (
    <>
      {caseStudy.headerImage ? (
        <header className="relative w-full aspect-[21/9] min-h-[40vh]">
          <Image
            src={urlFor(caseStudy.headerImage).width(2400).url()}
            alt={caseStudy.headerImage.alt ?? caseStudy.title ?? ""}
            fill
            priority
            sizes="100vw"
            placeholder={caseStudy.headerImage.lqip ? "blur" : "empty"}
            blurDataURL={caseStudy.headerImage.lqip ?? undefined}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 max-w-3xl mx-auto w-full">
            <time className="text-sm text-white/70">{caseStudy.datePosted}</time>
            <h1 className="text-4xl font-light mt-2 text-white">{caseStudy.title}</h1>
          </div>
        </header>
      ) : (
        <div className="pt-28 max-w-3xl mx-auto px-6">
          <time className="text-sm text-neutral-500">{caseStudy.datePosted}</time>
          <h1 className="text-4xl font-light mt-2 mb-8">{caseStudy.title}</h1>
        </div>
      )}
      <article className="max-w-3xl mx-auto px-6 pt-12 pb-16">
        {caseStudy.content && (
          <div className="prose prose-neutral max-w-none">
            <PortableText value={caseStudy.content} />
          </div>
        )}
      </article>
    </>
  );
}
