import { FunctionComponent } from "react";
import { PostContentType } from "app-data/types";
import localFont from "next/font/local";

const uthmanicHafs = localFont({
  src: "../../assets/fonts/uthmanic_hafs_v22.ttf",
});

const uthmanicWarsh = localFont({
  src: "../../assets/fonts/UthmanicWarsh V21.ttf",
});

export const Text: FunctionComponent<PostContentType> = ({ type, text }) => {
  switch (type) {
    case "title":
      return <h2 className="text-center text-2xl font-medium my-4">{text}</h2>;

    case "latin":
      return <p dangerouslySetInnerHTML={{ __html: `<span>${text}</span>` }} />;

    case "quote":
      return (
        <p
          className="font-semibold"
          dangerouslySetInnerHTML={{ __html: `<span>${text}</span>` }}
        />
      );

    case "ayah":
      return (
        <span
          dir="rtl"
          className={`${uthmanicHafs.className} text-center text-2xl leading-loose`}
        >
          <span className={uthmanicWarsh.className}>﴿ </span>
          <span>{text}</span>
          <span className={uthmanicWarsh.className}> ﴾</span>
        </span>
      );

    default:
      return text;
  }
};
