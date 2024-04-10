import { getInternationalSlug } from "@/src/sanity/sanity-utils";
import { Metadata } from "next";

type Props = {
  params: { international: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.international;
  const meta = await getInternationalSlug(slug);
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
