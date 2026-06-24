import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import {
  ALL_CASE_STUDIES_QUERY,
  type CaseStudyListItem,
} from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function CaseStudiesPage() {
  const caseStudies = await client.fetch<CaseStudyListItem[]>(
    ALL_CASE_STUDIES_QUERY,
    {},
    { next: { revalidate: 3600 } },
  );

  if (caseStudies.length === 0) {
    return (
      <main className="max-w-5xl mx-auto px-6 pt-48 pb-16">
        <h1 className="text-4xl mb-12">Case Studies</h1>
        <p className="text-neutral-500">No case studies yet.</p>
      </main>
    );
  }

  const [featured, ...rest] = caseStudies;

  return (
    <main className="max-w-6xl mx-auto px-6 pt-48 pb-16">
      <h1 className="mb-12">Case Studies</h1>

      {/* Featured — most recent */}
      <Link
        href={`/case-studies/${featured.slug?.current}`}
        className="group block border border-border rounded-lg overflow-hidden mb-8"
      >
        {featured.headerImage && (
          <div className="relative w-full aspect-[16/7] overflow-hidden">
            <Image
              src={urlFor(featured.headerImage).width(1600).url()}
              alt={featured.headerImage.alt ?? featured.title ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              placeholder={featured.headerImage.lqip ? "blur" : "empty"}
              blurDataURL={featured.headerImage.lqip ?? undefined}
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}
        <div className="p-6">
          <time className="text-sm text-neutral-500">
            {featured.datePosted}
          </time>
          <h2 className="text-3xl font-light mt-1 group-hover:underline">
            {featured.title}
          </h2>
        </div>
      </Link>

      {/* Masonry grid */}
      {rest.length > 0 && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {rest.map((study) => (
            <div key={study._id} className="break-inside-avoid mb-6">
              <Link
                href={`/case-studies/${study.slug?.current}`}
                className="group block border border-border rounded-lg overflow-hidden"
              >
                {study.headerImage && (
                  <div className="relative w-full aspect-video overflow-hidden">
                    <Image
                      src={urlFor(study.headerImage).width(800).url()}
                      alt={study.headerImage.alt ?? study.title ?? ""}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder={study.headerImage.lqip ? "blur" : "empty"}
                      blurDataURL={study.headerImage.lqip ?? undefined}
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-4">
                  <time className="text-sm text-neutral-500">
                    {study.datePosted}
                  </time>
                  <h2 className="text-xl font-light mt-1 group-hover:underline">
                    {study.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
