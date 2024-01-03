"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
    ChatBubbleLeftIcon,
    ChevronDownIcon,
    HomeIcon,
    
    PaperAirplaneIcon,
    PhoneIcon,
    PlayCircleIcon,
    HomeModernIcon,
    CameraIcon,
} from "@heroicons/react/20/solid";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { cn } from "@/lib/utils";


function Footer() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-[#013B94] ">
            <nav
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-2"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="">
                        <span className="sr-only">Booking.com</span>
                        <img
                            className="h-12 w-auto"
                            src="https://cdn.worldvectorlogo.com/logos/bookingcom-1.svg"
                            alt=""
                        />

                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex lg:gap-x-9 mr-14">
                    <div className="flex items-center space-x-2">
                        <HomeModernIcon className="h-6 w-4 text-gray-400" aria-hidden="true" />
                        <a href="#" className="text-sm font-semibold text-gray-400">
                            Hotels
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <PaperAirplaneIcon className="h-6 w-4 text-gray-400" aria-hidden="true" />
                        <a href="#" className="text-sm font-semibold text-gray-400">
                            Flights
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <PaperAirplaneIcon className="h-6 w-4 text-gray-400" aria-hidden="true" />
                        <a href="#" className="text-sm font-semibold text-gray-400">
                            Car Rentals
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <CameraIcon className="h-6 w-4 text-gray-400" aria-hidden="true" />
                        <a href="#" className="text-sm font-semibold text-gray-400">
                            Attractions
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <PaperAirplaneIcon className="h-6 w-4 text-gray-400" aria-hidden="true" />
                        <a href="#" className="text-sm font-semibold text-gray-400">
                            Flight + Hotel
                        </a>
                    </div>
                    <div className="flex items-center space-x-2">
                        <PhoneIcon className="h-6 w-4 text-gray-400" aria-hidden="true" />
                        <a href="#" className="text-sm font-semibold text-gray-400">
                            Customer Service
                        </a>
                    </div>
                </Popover.Group>

                <div className=" hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-lg font-semibold text-gray-400">
                        © Diana Zawislak 2004
                    </a>
                </div>
            </nav>

            <Dialog
                as="div"
                className="lg:hidden"
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
            >
                <div className="fixed inset-0 z-10" />


                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#013B94] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Booking.com</span>
                            <img
                                className="h-8 w-auto"
                                src="https://static1.squarespace.com/static/5bde0f00c3c16aa95581e2e2/62b4cb1add9d257dd43bb03d/62b653fedc7c895918d19b24/1656116254983/booking+logo+white.png?format=1500w"
                                alt=""
                            />
                        </a>

    
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-white"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                                >
                                    Flights
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                                >
                                    Car Rentals
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                                >
                                    Attractions
                                </a>
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-blue-800"
                                >
                                    Flight + Hotel
                                </a>
                            </div>


                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}

export default Footer;
