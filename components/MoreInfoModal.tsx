"use client"

import { Disclosure } from "@headlessui/react"
import { PlusCircleIcon } from "@heroicons/react/24/solid"

type Props = {
  info: Info[]
}

const MoreInfoModal = ({ info }: Props) => {
  return (
    <div className="container mx-auto pb-20">
      <p className="text-gray-500 text-2xl font-medium uppercase mb-3">
        MORE INFO
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize mb-10">
        Common questions
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        {info.map((inf, i) => {
          return (
            <Disclosure key={i}>
              {({ open }) => (
                <div className="group">
                  <Disclosure.Button className="flex flex-col group-hover:bg-[#524fd5] group-focus:bg-[#524fd5] w-full justify-between rounded-lg lg:rounded-full border border-gray-200 px-8 py-10 text-left text-sm font-medium  focus:outline-none ">
                    <div className="flex justify-between items-center w-full">
                      <span className="group-hover:text-white  group-focus:text-white">
                        {inf.title}
                      </span>
                      <PlusCircleIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-8 w-8  text-[#524fd5] text-2xl group-hover:text-white  group-focus:text-white `}
                      />
                    </div>

                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 group-focus:text-white group-hover:text-white">
                      {inf.desc}
                    </Disclosure.Panel>
                  </Disclosure.Button>
                </div>
              )}
            </Disclosure>
          )
        })}
      </div>
    </div>
  )
}

export default MoreInfoModal
