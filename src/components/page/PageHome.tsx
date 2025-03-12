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
import { ToastError, ToastSuccess } from "@/helper/Toast";

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
  characters: string;
  inframe: string;
  hashtags: string;
  costume: string;
  makeup: string;
  fg: string;
}

interface seriesInterface {
  name: string;
  characters: string[];
  hashtags: string[];
  category: string;
}

const mainHashtag = ["#cosplay", "#cosplayer"];

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
  {
    name: "Wuthering Waves",
    characters: [
      "Aalto",
      "Baizhi",
      "Brant",
      "Calcharo",
      "Camellya",
      "Cantarella",
      "Carlotta",
      "Changli",
      "Chixia",
      "Danjin",
      "Encore",
      "Jianxin",
      "Jinhsi",
      "Jiyan",
      "Lingyang",
      "Lumi",
      "Mortefi",
      "Phoebe",
      "Roccia",
      "Rover",
      "Sanhua",
      "Taoqi",
      "The Shorekeeper",
      "Verina",
      "Xiangli Yao",
      "Yangyang",
      "Yinlin",
      "Youhu",
      "Yuanwu",
      "Zani",
      "Zhezhi",
    ],
    hashtags: [
      "#wuwa",
      "#wuwacosplay",
      "#wutheringwaves",
      "#wutheringwavescosplay",
    ],
    category: "games",
  },
  {
    name: "Zenless Zone Zero",
    characters: [
      "Anby Demara",
      "Anton Ivanov",
      "Billy Kid",
      "Corin Wickes",
      "Cradily",
      "Ellen Joe",
      "Grace Howard",
      "Hoshimi Miyabi",
      "Koleda Belobog",
      "Krieger",
      "Lycopene",
      "M13 Pom",
      "Nicole Demara",
      "Nekomiya Mana",
      "Soukaku",
    ],
    hashtags: [
      "#zzz",
      "#zzzcosplay",
      "#zenlesszonezero",
      "#zenlesszonezerocosplay",
    ],
    category: "games",
  },
  {
    name: "Hololive ",
    characters: [
      //  Hololive JP
      "Tokino Sora",
      "Robocosan",
      "Yozora Mel",
      "Akai Haato",
      "Shirakami Fubuki",
      "Minato Aqua",
      "Murasaki Shion",
      "Nakiri Ayame",
      "Yuzuki Choco",
      "Oozora Subaru",
      "Sakura Miko",
      "Natsuiro Matsuri",
      "Azki",
      "Houshou Marine",
      "Usada Pekora",
      "Uruha Rushia",
      "Shiranui Flare",
      "Shirogane Noel",
      "Tsunomaki Watame",
      "Himemori Luna",
      "Yukihana Lamy",
      "Momosuzu Nene",
      "Shishiro Botan",
      "Omaru Polka",
      "Takane Lui",
      "Hakui Koyori",
      "Sakamata Chloe",
      "Kazama Iroha",
      "Hiodoshi Ao",
      "Ichijou Ririka",
      "Juufuutei Raden",
      "Otonose Kanade",

      // # Hololive EN
      "Mori Calliope",
      "Takanashi Kiara",
      "Ninomae Ina'nis",
      "Gawr Gura",
      "Watson Amelia",
      "IRyS",
      "Ceres Fauna",
      "Ouro Kronii",
      "Nanashi Mumei",
      "Hakos Baelz",
      "Advent",
      "Shiori Novella",
      "Koseki Bijou",
      "Nerissa Ravencroft",
      "Fuwawa Abyssgard",
      "Mococo Abyssgard",

      // # Hololive ID
      "Ayunda Risu",
      "Moona Hoshinova",
      "Airani Iofifteen",
      "Kureiji Ollie",
      "Anya Melfissa",
      "Pavolia Reine",
      "Vestia Zeta",
      "Kaela Kovalskia",
      "Kobo Kanaeru",
    ],
    hashtags: ["#hololive", "#hololivecosplay"],
    category: "vtuber",
  },
];

export default function PageHome() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [postData, setPostData] = useState<postCaption>({
    upperquotes: "",
    origin: "",
    characters: "",
    inframe: "",
    hashtags: "",
    costume: "",
    makeup: "",
    fg: "",
  });

  const [postDataInFrame, setPostDataInFrame] = useState("");
  const [finalCaption, setFinalCaption] = useState("");
  const [postDataHashtag, setPostDataHashtag] = useState("");
  const [isExtra, setIsExtra] = useState(false);
  const [defaultSeries, setDefaultSeries] =
    useState<seriesInterface[]>(seriesList);
  const [isSubmit, setIsSubmit] = useState(false);
  const [copySuccess, setCopySuccess] = useState<any>(null);

  const [isGenerated, setIsGenerated] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(finalCaption);
        setCopySuccess("Copied!");
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = finalCaption;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopySuccess("Copied!");
        ToastSuccess("Caption copied to clipboard!");
      }
    } catch (error) {
      setCopySuccess("Failed to copy!");
      console.error("Failed to copy text: ", error);
      ToastError("Failed to copy caption!");
    }
    setTimeout(() => {
      setCopySuccess(null);
    }, 2000); // Clear message after 2 seconds
  };

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

  const handleGenerateCaption = (data: postCaption) => {
    setIsGenerated(true);

    const textAreaValue =
      `#${data.characters.replaceAll(" ", "")} — ` +
      data.upperquotes +
      "\n \n👤: " +
      data.inframe +
      `${data.fg != "" ? `\n📸: ${data.fg}` : ""}` +
      "\n👗: " +
      data.costume +
      `${data.makeup != "" ? `\n💄: ${data.makeup}` : ""}` +
      "\n \n " +
      data.hashtags;

    setFinalCaption(textAreaValue);
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
              <img alt="" src="tokisakilogo-black.svg" className="h-8 w-auto" />
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
                  src="tokisakilogo-black.svg"
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
                    hashtags: defaultSeries
                      .filter((defSeries) => defSeries.name === e.target.value)
                      .flatMap((defSeries) => defSeries.hashtags)
                      .join(" "),
                  }));
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
                    value={postData.characters}
                    onChange={(e) => {
                      setPostData((prevData) => ({
                        ...prevData,
                        characters: e.target.value,
                        hashtags:
                          mainHashtag.join(" ") +
                          ` ` +
                          defaultSeries
                            .filter(
                              (defSeries) => defSeries.name === postData.origin
                            )
                            .flatMap((defSeries) => defSeries.hashtags)
                            .join(" ") +
                          ` #${e.target.value
                            .replaceAll(" ", "")
                            .toLowerCase()}cosplay #${e.target.value
                            .replaceAll(" ", "")
                            .toLowerCase()}`,
                      }));
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
                  value={postData.characters}
                  onChange={(e) => {
                    setPostData((prevData) => ({
                      ...prevData,
                      characters: e.target.value,
                      hashtags:
                        mainHashtag.join(" ") +
                        ` ` +
                        ` #${e.target.value
                          .replaceAll(" ", "")
                          .toLowerCase()}cosplay #${e.target.value
                          .replaceAll(" ", "")
                          .toLowerCase()}`,
                    }));
                  }}
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
                value={postData.inframe}
                onChange={(e) =>
                  setPostData((prevData) => ({
                    ...prevData,
                    inframe: e.target.value,
                  }))
                }
                onBlur={() =>
                  setPostData((prevData) => ({
                    ...prevData,
                    inframe: getInFrame(postData.inframe),
                  }))
                }
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
                value={postData.costume}
                onChange={(e) =>
                  setPostData((prevData) => ({
                    ...prevData,
                    costume: e.target.value,
                  }))
                }
                onBlur={() =>
                  setPostData((prevData) => ({
                    ...prevData,
                    costume: getInFrame(postData.costume),
                  }))
                }
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
                    value={postData.makeup}
                    onChange={(e) =>
                      setPostData((prevData) => ({
                        ...prevData,
                        makeup: e.target.value,
                      }))
                    }
                    onBlur={() =>
                      setPostData((prevData) => ({
                        ...prevData,
                        makeup: getInFrame(postData.makeup),
                      }))
                    }
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
                    value={postData.fg}
                    onChange={(e) =>
                      setPostData((prevData) => ({
                        ...prevData,
                        fg: e.target.value,
                      }))
                    }
                    onBlur={() =>
                      setPostData((prevData) => ({
                        ...prevData,
                        fg: getInFrame(postData.fg),
                      }))
                    }
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
                value={postData.hashtags}
                onChange={(e) =>
                  setPostData((prevData) => ({
                    ...prevData,
                    hashtags: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        </div>
        <div className="flex items-center mt-12">
          <button
            className="mx-auto text-center py-2 px-4 rounded-lg bg-green-500 hover:bg-green-700 text-white cursor-pointer"
            onClick={() => handleGenerateCaption(postData)}
          >
            Generate Caption!
          </button>
        </div>

        {isGenerated && (
          <>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 lg:max-w-3xl mx-auto">
              <div className="col-span-full">
                <label
                  htmlFor="generated"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Generated Caption
                </label>
                <div className="mt-2">
                  <textarea
                    id="generated"
                    name="generated"
                    rows={10}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    value={finalCaption}
                    onChange={(e) => setFinalCaption(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center mt-12">
              <button
                className="mx-auto text-center py-2 px-4 rounded-lg bg-green-500 hover:bg-green-700 text-white cursor-pointer"
                onClick={() => handleCopy()}
              >
                Copy to Clipboard
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
