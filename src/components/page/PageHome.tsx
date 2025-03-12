"use client";

import { useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import quotesData from "./../../data/quotes.json";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

interface postCaption {
  upperquotes: string;
  origin: string;
  characters: string[];
  inframe: string[];
  hashtags: string[];
}

interface seriesInterface {
  name: string;
  characters: string[];
  hashtags: string[];
  category: string;
}

const seriesList: seriesInterface[] = [
  {
    name: "Genshin Impact",
    characters: [
      "Albedo",
      "Alhaitham",
      "Aloy",
      "Amber",
      "Arataki Itto",
      "Baizhu",
      "Barbara",
      "Beidou",
      "Bennett",
      "Candace",
      "Charlotte",
      "Chevreuse",
      "Childe",
      "Chiori",
      "Chongyun",
      "Collei",
      "Cyno",
      "Dehya",
      "Dendro Traveler",
      "Diona",
      "Dori",
      "Eula",
      "Faruzan",
      "Fischl",
      "Freminet",
      "Furina",
      "Ganyu",
      "Gorou",
      "Hu Tao",
      "Jean",
      "Kaedehara Kazuha",
      "Kaeya",
      "Kamisato Ayaka",
      "Kamisato Ayato",
      "Kaveh",
      "Keqing",
      "Kirara",
      "Klee",
      "Kujou Sara",
      "Kuki Shinobu",
      "Layla",
      "Lisa",
      "Lynette",
      "Lyney",
      "Mika",
      "Mona",
      "Nahida",
      "Navia",
      "Neuvillette",
      "Nilou",
      "Ningguang",
      "Noelle",
      "Qiqi",
      "Raiden Shogun",
      "Razor",
      "Rosaria",
      "Sangonomiya Kokomi",
      "Sayu",
      "Shenhe",
      "Shikanoin Heizou",
      "Sucrose",
      "Tartaglia",
      "Thoma",
      "Tighnari",
      "Traveler",
      "Venti",
      "Wanderer",
      "Wriothesley",
      "Xiangling",
      "Xiao",
      "Xingqiu",
      "Xinyan",
      "Yae Miko",
      "Yaoyao",
      "Yelan",
      "Yoimiya",
      "Yun Jin",
      "Zhongli",
    ],
    hashtags: ["#genshinimpactcosplay", "#genshinimpact"],
    category: "games",
  },
  {
    name: "Honkai: Star Rail",
    characters: [
      "Asta",
      "Arlan",
      "Bailu",
      "Blade",
      "Bronya",
      "Clara",
      "Dan Heng",
      "Dan Heng • Imbibitor Lunae",
      "Gepard",
      "Guinaifen",
      "Hanya",
      "Herta",
      "Himeko",
      "Hook",
      "Huohuo",
      "Jing Yuan",
      "Jingliu",
      "Kafka",
      "Luka",
      "Lynx",
      "March 7th",
      "Misha",
      "Natasha",
      "Pela",
      "Qingque",
      "Ruan Mei",
      "Sampo",
      "Seele",
      "Serval",
      "Silver Wolf",
      "Snowy",
      "Sparkle",
      "Sushang",
      "Topaz & Numby",
      "Tingyun",
      "Trailblazer",
      "Welt",
      "Xueyi",
      "Yanqing",
      "Yukong",
    ],
    hashtags: ["#honkaistarrail", "#honkaistarrailcosplay"],
    category: "games",
  },
];

export default function PageHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [postData, setPostData] = useState<postCaption>({
    upperquotes: "",
    origin: "",
    characters: [],
    inframe: [],
    hashtags: [],
  });

  const [postDataInFrame, setPostDataInFrame] = useState("");
  const [postDataFG, setPostDataFG] = useState("");
  const [postDataMUA, setPostDataMUA] = useState("");
  const [postDataCostume, setPostDataCostume] = useState("");
  const [postDataCharacter, setPostDataCharacter] = useState("");
  const [postDataHashtag, setPostDataHashtag] = useState("");
  const [isExtra, setIsExtra] = useState(false);
  const [defaultSeries, setDefaultSeries] =
    useState<seriesInterface[]>(seriesList);
  const [isSubmit, setIsSubmit] = useState(false);

  const getRandomQuote = () => {
    if (Array.isArray(quotesData) && quotesData.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotesData.length);
      setPostData((prevData) => ({
        ...prevData,
        upperquotes: Array.isArray(quotesData)
          ? quotesData[randomIndex].Quote
          : "-",
      }));
    }
  };

  const getInFrame = (str: string): string => {
    const coserArray: string[] = [];
    let tempStr = str; // Create a copy of the input string to avoid mutation

    while (tempStr.includes("@")) {
      const start = tempStr.indexOf("@");

      let end: number;
      if (tempStr.includes(" ", start) && tempStr.includes(")", start)) {
        if (tempStr.indexOf(" ", start) < tempStr.indexOf(")", start)) {
          end = tempStr.indexOf(" ", start);
        } else {
          end = tempStr.indexOf(")", start);
        }
      } else if (tempStr.includes(" ", start)) {
        end = tempStr.indexOf(" ", start);
      } else if (tempStr.includes(")", start)) {
        end = tempStr.indexOf(")", start);
      } else {
        end = tempStr.length;
      }

      const result = tempStr.substring(start, end);
      tempStr = tempStr.replaceAll(result, "");
      coserArray.push(result);
    }

    let resultString: string;
    if (coserArray.length <= 2) {
      resultString = coserArray
        .map((item) => item.replace(/,/g, ""))
        .join(" and ");
    } else {
      resultString = coserArray
        .map((item) => item.replace(/,/g, ""))
        .join(", ");
      const lastIndexOfComma = resultString.lastIndexOf(",");
      if (lastIndexOfComma !== -1) {
        resultString =
          resultString.slice(0, lastIndexOfComma) +
          ", and" +
          resultString.slice(lastIndexOfComma + 1);
      }
    }

    return resultString;
  };

  return (
    <div className="mx-auto bg-white p-6 min-h-screen">
      <header className="bg-white">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 pb-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Home
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Database
            </a>
          </PopoverGroup>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-10" />
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Database
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
      <div className="max-w-7xl mx-auto p-6 lg:px-8">
        <p className="lg:max-w-3xl text-center mx-auto font-bold text-black text-4xl mt-10">
          Tokisaki Gallery Caption Maker
        </p>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 lg:max-w-3xl mx-auto">
          <div className="col-span-full">
            <label
              htmlFor="upperquotes"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Upper Caption / Quotes
            </label>
            <div className="mt-2">
              <textarea
                id="upperquotes"
                name="upperquotes"
                rows={3}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                value={postData.upperquotes}
                onChange={(e) => {
                  setPostData((prevData) => ({
                    ...prevData,
                    upperquotes: e.target.value,
                  }));
                }}
              />
            </div>
            <p className="mt-3 text-sm/6 text-gray-600">
              Write a few sentences about the photos, or{" "}
              <span
                className="bg-green-300 rounded-lg py-2 px-4 ml-2 cursor-pointer hover:bg-green-700 hover:text-white"
                onClick={getRandomQuote}
              >
                Generate Quotes!
              </span>
            </p>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Origin
            </label>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="origin"
                name="origin"
                value={postData.origin}
                onChange={(e) => {
                  setPostData((prevData) => ({
                    ...prevData,
                    origin: e.target.value,
                  }));
                  setPostDataHashtag(
                    defaultSeries
                      .filter((defSeries) => defSeries.name === e.target.value)
                      .flatMap((defSeries) => defSeries.hashtags)
                      .join(", ")
                  );
                }}
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value="Others">Others</option>
                {defaultSeries.map((defSeries, index) => (
                  <option key={index} value={defSeries.name}>
                    {defSeries.name}
                  </option>
                ))}
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="characters"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Character
            </label>
            <div
              className={`mt-2 ${
                postData.origin === "Others" ? "null" : "grid grid-cols-1"
              }`}
            >
              {postData.origin != "Others" ? (
                <>
                  <select
                    id="origin"
                    name="origin"
                    value={postDataCharacter}
                    onChange={(e) => {
                      setPostDataCharacter(e.target.value);
                    }}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="Others">Others</option>
                    {defaultSeries
                      .filter((defSeries) => defSeries.name === postData.origin)
                      .flatMap((defSeries) => defSeries.characters)
                      .map((character, index) => (
                        <option key={index} value={character}>
                          {character}
                        </option>
                      ))}
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </>
              ) : (
                <input
                  id="characters"
                  name="characters"
                  type="text"
                  value={postDataCharacter}
                  onChange={(e) => setPostDataCharacter(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              )}
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="inframe"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Cosplayer / In Frame
            </label>
            <div className="mt-2">
              <input
                id="inframe"
                name="inframe"
                type="text"
                value={postDataInFrame}
                onChange={(e) => setPostDataInFrame(e.target.value)}
                onBlur={() => setPostDataInFrame(getInFrame(postDataInFrame))}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="inframe"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Costume
            </label>
            <div className="mt-2">
              <input
                id="costume"
                name="costume"
                type="text"
                value={postDataCostume}
                onChange={(e) => setPostDataCostume(e.target.value)}
                onBlur={() => setPostDataCostume(getInFrame(postDataCostume))}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          {isExtra ? (
            <>
              <div className="sm:col-span-3">
                <label
                  htmlFor="inframe"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Makeup
                </label>
                <div className="mt-2">
                  <input
                    id="makeup"
                    name="makeup"
                    type="text"
                    value={postDataMUA}
                    onChange={(e) => setPostDataMUA(e.target.value)}
                    onBlur={() => setPostDataMUA(getInFrame(postDataMUA))}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="inframe"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Photographer
                </label>
                <div className="mt-2">
                  <input
                    id="fg"
                    name="fg"
                    type="text"
                    value={postDataFG}
                    onChange={(e) => setPostDataFG(e.target.value)}
                    onBlur={() => setPostDataFG(getInFrame(postDataFG))}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
            </>
          ) : (
            <p
              className="col-span-full text-sm/6 text-gray-600 cursor-pointer"
              onClick={() => setIsExtra(true)}
            >
              Show Extra Option
            </p>
          )}

          <div className="col-span-full">
            <label
              htmlFor="hashtags"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Hashtag
            </label>
            <div className="mt-2">
              <textarea
                id="hashtags"
                name="hashtags"
                rows={3}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                value={postDataHashtag}
                onChange={(e) => setPostDataHashtag(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-12">
          <button className="mx-auto text-center py-2 px-4 rounded-lg bg-green-500 hover:bg-green-700 text-white cursor-pointer">
            Generate Caption!
          </button>
        </div>
      </div>
    </div>
  );
}
