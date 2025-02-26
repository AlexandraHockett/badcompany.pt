import Link from "next/link";

type MediaCardProps = {
  title: string;
  image: string;
  href: string;
};

export default function MediaCard({ title, image, href }: MediaCardProps) {
  return (
    <Link href={href}>
      <div className="relative group overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4">
          <h2 className="text-xl font-bold text-white">{title}</h2>
        </div>
      </div>
    </Link>
  );
}
