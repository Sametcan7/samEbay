import { CiCircleQuestion, CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="max-lg:p-2 p-8">
      <div className="max-lg:flex-col flex max-lg:gap-4  flex-row  justify-between">
        <div className="text-center">
          <p className="font-semibold">We&apos;re always here to help</p>
          <p className="text-[#8697A4]">
            You can get help by choosing from any of these options
          </p>
        </div>
        <div className="flex max-sm:mx-auto max-sm:flex-col flex-row gap-4 max-lg:justify-center ">
          <div className="flex flex-row gap-2">
            <div className="flex items-center gap-1">
              <CiCircleQuestion className="size-8 text-[#6ACED9]" />
            </div>
            <div>
              <p className="text-[#8697A4] text-sm">Help Center</p>
              <p className="font-semibold">help.samEbay.com</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex items-center gap-1">
              <CiPhone className="size-8 text-[#6ACED9]" />
            </div>
            <div>
              <p className="text-[#8697A4] text-sm">Phone</p>
              <p className="font-semibold">+909999999</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex items-center gap-1">
              <MdOutlineEmail className="size-8 text-[#6ACED9]" />
            </div>
            <div>
              <p className="text-[#8697A4] text-sm">Email Support</p>
              <p className="font-semibold">online@samEbay.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
