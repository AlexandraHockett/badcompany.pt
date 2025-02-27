// components/Breadcrumbs.tsx
import Link from "next/link";

type BreadcrumbsProps = {
  slug?: string;
  basePath: string; // "festas" ou "sobre"
  baseName: string; // "Festas" ou "Sobre"
};

export default function Breadcrumbs({
  slug,
  basePath,
  baseName,
}: BreadcrumbsProps) {
  const crumbs = [{ name: "Home", href: "/" }];

  if (slug) {
    crumbs.push({ name: baseName, href: `/${basePath}` });
    crumbs.push({
      name: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      href: `/${basePath}/${slug}`,
    });
  } else {
    crumbs.push({ name: baseName, href: `/${basePath}` });
  }

  return (
    <nav className="lg:ml-20 ml-10 mb-4 text-gray-300">
      {crumbs.map((crumb, index) => (
        <span key={crumb.href}>
          {index > 0 && " > "}
          <Link
            href={crumb.href}
            className="hover:text-purple-200 hover:underline"
          >
            {crumb.name}
          </Link>
        </span>
      ))}
    </nav>
  );
}
