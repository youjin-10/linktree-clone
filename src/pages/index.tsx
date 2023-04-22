import Image from "next/image";
import data from "../data.json";
import { GithubIcon, TwitterIcon } from "@/styles/Icons";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto w-full mt-16 px-8">
      <Image
        className="rounded-full"
        alt="avatar"
        src={data.avatar}
        width={96}
        height={96}
      />
      <h1 className="font-bold mt-4 mb-8 text-xl text-white">{data.name}</h1>

      {data.links.map((link, i) => (
        <LinkCard
          key={i}
          href={link.href}
          title={link.title}
          image={link.image}
        />
      ))}

      <div className="flex items-center justify-center gap-2 mt-8">
        {data.socials.map((social, i) => {
          if (social.href.includes("twitter")) {
            return <TwitterIcon key={social.title} />;
          } else if (social.href.includes("github")) {
            return <GithubIcon key={social.title} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

type LinkCardProps = {
  href: string;
  title: string;
  image: string;
};

function LinkCard({ href, title, image }: LinkCardProps) {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-sm hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
    >
      <div className="flex w-full">
        <Image
          className="rounded-sm"
          alt={title}
          src={image}
          width={40}
          height={40}
        />
        <h2 className="flex justify-center  items-center w-full font-semibold text-gray-700">
          {title}
        </h2>
      </div>
    </a>
  );
}
