import { getSpecialSlug } from "@/src/sanity/sanity-utils";
import { Metadata } from "next";

type Props = {
  params: { special: string };
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.special;
  const meta = await getSpecialSlug(slug);
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
