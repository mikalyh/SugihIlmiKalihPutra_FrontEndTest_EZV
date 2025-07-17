import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col flex-wrap items-center justify-center mb-8 mt-6">
      <p className="text-gray-600 text-base mb-2">
        This app is made with ❤️ by Sugih Ilmi Kalih Putra
      </p>

      <div className="row-start-3 flex gap-[24px] flex-wrap items-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/mikalyh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="Github icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/mikalyh_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/instagram.svg"
            alt="Instagram icon"
            width={16}
            height={16}
          />
          Instagram
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.tiktok.com/@_mikalyh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/tiktok.svg"
            alt="Tiktok icon"
            width={16}
            height={16}
          />
          Tiktok
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.youtube.com/@mikalyh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/youtube.svg"
            alt="Youtube icon"
            width={16}
            height={16}
          />
          Youtube
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/sugih-ilmi-kalih-putra-8a19a0185/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="Linkedin icon"
            width={16}
            height={16}
          />
          LinkedIn →
        </a>
      </div>
    </footer>
  );
}
