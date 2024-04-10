import { getDomesticSlug } from "@/src/sanity/sanity-utils";
import { Metadata } from "next";

type Props = {
  params: { domestic: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.domestic;
  const meta = await getDomesticSlug(slug);
  return {
    title: {
      default: meta.name,
      template: `%s | ${meta.name} | tripusers.com`,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
