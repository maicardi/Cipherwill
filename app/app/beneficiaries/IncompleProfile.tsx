import { t } from "@/common/i18n";
import Link from "next/link";

export default function IncompleteProfile() {
  return (
    <div className="p-4 flex flex-col items-center justify-center w-full">
      <div className="py-4">{t("Profile is not completed")}</div>
      <Link
        className="bg-orange-200 hover:bg-orange-300 text-sm px-3 py-1 rounded-full mx-2 text-black"
        href={"/app/settings?tab=profile"}
      >
        {t("Complete")}
      </Link>
    </div>
  );
}
