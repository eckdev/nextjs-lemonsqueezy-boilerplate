import TechList from "@/components/shared/tech-list";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "config/site";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="relative flex h-full w-full flex-col">
      <section className="body-font z-50 text-gray-600">
        <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
          <div className="mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24">
            <h1 className="title-font mb-4 text-3xl font-bold uppercase text-gray-900 sm:text-4xl">
              Lorem ipsum
              <br className="hidden lg:inline-block" />
              Lorem ipsum Header
            </h1>
            <p className="mb-8 leading-relaxed">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
            </p>
            <div className="flex justify-center">
              <Button
                variant={"default"}
                size={"lg"}
                type="submit"
                className={"w-full"}
              >
                Button
              </Button>
              <Button
                variant={"secondary"}
                size={"lg"}
                type="submit"
                className={"ml-4 w-full"}
              >
                Button
              </Button>
            </div>
          </div>
          <div className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg">
            <Image
              className="rounded object-cover object-center"
              width={720}
              height={600}
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
        </div>
      </section>
      <section className="body-font z-50 text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 flex w-full flex-col text-center">
            <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-primary">
              Lorem ipsum header
            </h2>
            <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2] dark:text-white">
            Lorem Ipsum
                </h2>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/3">
              <div className="hover:shadow-features dark:bg-gray-dark flex h-full flex-col rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                  Lorem Ipsum
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                  </p>
                  <a className="mt-3 inline-flex items-center text-primary">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="hover:shadow-features dark:bg-gray-dark flex h-full flex-col rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                  Lorem Ipsum
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                  </p>
                  <a className="mt-3 inline-flex items-center text-primary">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="hover:shadow-features dark:bg-gray-dark flex h-full flex-col rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Lorem ipsum
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                  </p>
                  <a className="mt-3 inline-flex items-center text-primary">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="hover:shadow-features dark:bg-gray-dark flex h-full flex-col rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Lorem ipsum
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                  </p>
                  <a className="mt-3 inline-flex items-center text-primary">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="hover:shadow-features dark:bg-gray-dark flex h-full flex-col rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Lorem ipsum
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                  </p>
                  <a className="mt-3 inline-flex items-center text-primary">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="hover:shadow-features dark:bg-gray-dark flex h-full flex-col rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="title-font text-lg font-medium text-gray-900">
                    Lorem ipsum
                  </h2>
                </div>
                <div className="flex-grow">
                  <p className="text-base leading-relaxed">
                  Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                  </p>
                  <a className="mt-3 inline-flex items-center text-primary">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative z-10 overflow-hidden bg-primary py-20 lg:py-[115px]">
        <div className="container mx-auto">
          <div className="relative overflow-hidden">
            <div className="-mx-4 flex flex-wrap items-stretch">
              <div className="w-full px-4">
                <div className="mx-auto max-w-[570px] text-center">
                  <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                    <span>What Are You Looking For?</span>
                    <span className="text-3xl font-normal md:text-[40px]">
                      {" "}
                    </span>
                  </h2>
                  <p className="mx-auto mb-6 max-w-[515px] text-base leading-[1.5] text-white">
                    There are many variations of passages of Lorem Ipsum but the
                    majority have suffered in some form.
                  </p>
                  <Button
                    variant={"secondary"}
                    size={"lg"}
                    type="submit"
                    className={"w-50"}
                  >
                    Button
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="absolute left-0 top-0">
            <svg
              width="495"
              height="470"
              viewBox="0 0 495 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="55"
                cy="442"
                r="138"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="50"
              ></circle>
              <circle
                cx="446"
                r="39"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="20"
              ></circle>
              <path
                d="M245.406 137.609L233.985 94.9852L276.609 106.406L245.406 137.609Z"
                stroke="white"
                stroke-opacity="0.08"
                stroke-width="12"
              ></path>
            </svg>
          </span>
          <span className="absolute bottom-0 right-0">
            <svg
              width="493"
              height="470"
              viewBox="0 0 493 470"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="462"
                cy="5"
                r="138"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="50"
              ></circle>
              <circle
                cx="49"
                cy="470"
                r="39"
                stroke="white"
                stroke-opacity="0.04"
                stroke-width="20"
              ></circle>
              <path
                d="M222.393 226.701L272.808 213.192L259.299 263.607L222.393 226.701Z"
                stroke="white"
                stroke-opacity="0.06"
                stroke-width="13"
              ></path>
            </svg>
          </span>
        </div>
      </section>
      <section className="body-font text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <h1 className="title-font mb-12 text-center text-3xl font-medium text-gray-900">
            Testimonials
          </h1>
          <div className="-m-4 flex flex-wrap">
            <div className="w-full p-4 md:w-1/2">
              <div className="hover:shadow-features dark:bg-gray-dark h-full rounded bg-white p-8 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="mb-4 block h-5 w-5 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 9s microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    width={106}
                    height={106}
                    className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
                  />
                  <span className="flex flex-grow flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      John Doe
                    </span>
                    <span className="text-sm text-gray-500">UI DEVELOPER</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full p-4 md:w-1/2">
              <div className="hover:shadow-features dark:bg-gray-dark h-full rounded bg-white p-8 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="mb-4 block h-5 w-5 text-gray-400"
                  viewBox="0 0 975.036 975.036"
                >
                  <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                </svg>
                <p className="mb-6 leading-relaxed">
                  Synth chartreuse iPhone lomo cray raw denim brunch everyday
                  carry neutra before they sold out fixie 90s microdosing. Tacos
                  pinterest fanny pack venmo, post-ironic heirloom try-hard
                  pabst authentic iceland.
                </p>
                <a className="inline-flex items-center">
                  <Image
                    alt="testimonial"
                    src="https://dummyimage.com/106x106"
                    width={106}
                    height={106}
                    className="h-12 w-12 flex-shrink-0 rounded-full object-cover object-center"
                  />
                  <span className="flex flex-grow flex-col pl-4">
                    <span className="title-font font-medium text-gray-900">
                      John Doe
                    </span>
                    <span className="text-sm text-gray-500">DESIGNER</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="pricing"
        className="dark:bg-dark relative z-20 overflow-hidden bg-white pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]"
      >
        <div className="container">
          <div className="mb-[60px]">
            <div className="-mx-4 flex flex-wrap">
              <div
                className="wow fadeInUp mx-auto w-full px-4 text-center max-w-screen-sm"
                data-wow-delay=".1s"
              >
                <span className="mb-2 block text-lg font-semibold text-primary">
                  Pricing Table
                </span>
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] md:leading-[1.2] dark:text-white">
                  Our Pricing Plan
                </h2>
                <p className="text-body-color dark:text-dark-6 text-base leading-relaxed sm:leading-relaxed">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="dark:bg-dark-2 relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] sm:p-12 lg:px-6 lg:py-10 xl:p-14"
                data-wow-delay=".1s"
              >
                <span className="text-dark mb-5 block text-xl font-medium dark:text-white">
                  Basic
                </span>
                <h2 className="text-dark mb-11 text-4xl font-semibold xl:text-[42px] xl:leading-[1.21] dark:text-white">
                  <span className="text-xl font-medium">$ </span>
                  <span className="-ml-1 -tracking-[2px]">39</span>
                  <span className="text-body-color dark:text-dark-6 text-base font-normal">
                    {" "}
                    Per Month
                  </span>
                </h2>
                <div className="mb-[50px]">
                  <h3 className="text-dark mb-5 text-lg font-medium dark:text-white">
                    Features
                  </h3>
                  <div className="mb-10">
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      1 User
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      All UI components
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      Lifetime access
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      Free updates
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      Use on 1 (one) project
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      3 Months support
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <button className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="dark:bg-dark-2 relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] sm:p-12 lg:px-6 lg:py-10 xl:p-14"
                data-wow-delay=".1s"
              >
                <span className="text-dark mb-5 block text-xl font-medium dark:text-white">
                  Business
                </span>
                <h2 className="text-dark mb-11 text-4xl font-semibold xl:text-[42px] xl:leading-[1.21] dark:text-white">
                  <span className="text-xl font-medium">$ </span>
                  <span className="-ml-1 -tracking-[2px]">1,299</span>
                  <span className="text-body-color dark:text-dark-6 text-base font-normal">
                    {" "}
                    Per Month
                  </span>
                </h2>
                <div className="mb-[50px]">
                  <h3 className="text-dark mb-5 text-lg font-medium dark:text-white">
                    Features
                  </h3>
                  <div className="mb-10">
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      Unlimited Users
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      All UI components
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      Lifetime access
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      Free updates
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      Use on unlimited project
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      Lifetime support
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <button className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="dark:bg-dark-2 relative z-10 mb-10 overflow-hidden rounded-xl bg-white px-8 py-10 shadow-[0px_0px_40px_0px_rgba(0,0,0,0.08)] sm:p-12 lg:px-6 lg:py-10 xl:p-14"
                data-wow-delay=".1s"
              >
                <p className="absolute right-[-50px] top-[60px] inline-block -rotate-90 rounded-bl-md rounded-tl-md bg-primary px-5 py-2 text-base font-medium text-white">
                  Recommended
                </p>
                <span className="text-dark mb-5 block text-xl font-medium dark:text-white">
                  Premium
                </span>
                <h2 className="text-dark mb-11 text-4xl font-semibold xl:text-[42px] xl:leading-[1.21] dark:text-white">
                  <span className="text-xl font-medium">$ </span>
                  <span className="-ml-1 -tracking-[2px]">259</span>
                  <span className="text-body-color dark:text-dark-6 text-base font-normal">
                    {" "}
                    Per Month
                  </span>
                </h2>
                <div className="mb-[50px]">
                  <h3 className="text-dark mb-5 text-lg font-medium dark:text-white">
                    Features
                  </h3>
                  <div className="mb-10">
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      10 Users
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      All UI components
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      Lifetime access
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      Free updates
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      Use on 20 projects
                    </p>
                    <p className="text-body-color dark:text-dark-6 mb-1 text-base">
                      3 Years support
                    </p>
                  </div>
                </div>
                <div className="w-full">
                  <button className="inline-block rounded-md bg-primary px-7 py-3 text-center text-base font-medium text-white transition duration-300 hover:bg-primary/90">
                    Purchase Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
