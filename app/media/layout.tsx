import { ReactNode } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import Breadcrumbs from "@/components/Breadcrumbs";

type Props = {
  children: ReactNode;
  params: { slug?: string };
};

export default function MediaLayout({ children, params }: Props) {
  return (
    <BackgroundBeamsWithCollision className="relative min-h-screen flex flex-col">
      <div className="relative min-h-screen w-full overflow-x-hidden">
        {/* Conteúdo Principal */}
        <div className="max-w-[90%] mx-auto px-4 pt-24 sm:pt-36 md:pt-40 relative z-20">
          <Breadcrumbs slug={params?.slug} basePath="media" baseName="Media" />
          <main className="flex-1 w-full">{children}</main>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
