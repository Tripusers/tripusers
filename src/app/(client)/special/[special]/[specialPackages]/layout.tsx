import { getSpecialPackagesSlug } from "@/src/sanity/sanity-utils";
import { Metadata } from "next";

type Props = {
  params: {
    specialPackages: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.specialPackages;
  const meta = await getSpecialPackagesSlug(slug);
  return {
    title: {
      default: meta.title,
      template: `%s | ${meta.title} | tripusers.com`,
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
