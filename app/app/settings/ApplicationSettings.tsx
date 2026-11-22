"use client";
import { t } from "@/common/i18n";

import { useMutation } from "@apollo/client/react";
import DELETE_DATA from "../../../graphql/ops/auth/mutations/DELETE_DATA";
import DELETE_ACCOUNT from "../../../graphql/ops/auth/mutations/DELETE_ACCOUNT";
import RECHECK_MY_ACTIONS_VALIDATION from "../../../graphql/ops/auth/mutations/RECHECK_MY_ACTIONS_VALIDATION";
import { useAuth } from "../../../contexts/AuthContext";
import toast from "react-hot-toast";
import { sleep } from "../../../common/time/sleep";
import FetchAllDataItems from "../../../components/debug/FetchAllDataItems";

export default function ApplicationSettings() {
  const { logout } = useAuth();
  const [deleteData] = useMutation(DELETE_DATA);
  const [deleteAccount] = useMutation(DELETE_ACCOUNT);
  const [recheckMyActionsValidation, { loading: isRecheckRunning }] = useMutation(
    RECHECK_MY_ACTIONS_VALIDATION,
  );
  const isDevelopment = process.env.NEXT_PUBLIC_BUILD_ENV === "development";
  return (
    <div className="w-full max-w-2xl m-auto flex flex-col justify-center px-2">
      {isDevelopment && (
        <div className="flex items-center justify-between py-2">
          <div>
            <div>{t("Recheck actions validation")}</div>
            <div className="text-sm text-gray-500">
              {t("Runs the same objective validation check used by cron, only for your user.")}
            </div>
          </div>
          <button
            data-cy="recheck-actions-validation-button"
            className="bg-blue-500 hover:bg-blue-700 text-white px-2 rounded-sm disabled:cursor-not-allowed disabled:bg-blue-300"
            disabled={isRecheckRunning}
            onClick={async () => {
              try {
                const response = await recheckMyActionsValidation();
                if ((response.data as any)?.recheckMyActionsValidation) {
                  toast.success(t("Actions validation recheck completed"));
                } else {
                  toast.error(t("Recheck is available only in development mode"));
                }
              } catch (error) {
                toast.error(t("Failed to recheck actions validation"));
              }
            }}
          >
            {isRecheckRunning ? t("Rechecking...") : t("Recheck")}
          </button>
        </div>
      )}

      <div className="flex items-center justify-between py-2">
        <div>
          <div>{t("Delete All data")}</div>
          <div className="text-sm text-gray-500">
            {t("This will delete all data items, smart will, peoples, factors")}
          </div>
        </div>
        <button
          data-cy="reset-account-button"
          className="bg-red-500 hover:bg-red-700 text-white px-2 rounded-sm"
          onClick={async () => {
            const cnf = confirm(t("Are you sure you want to delete all data"));
            if (cnf) {
              await deleteData();
              toast.success(t("All data deleted"));
              await sleep(2000);
              window.location.reload();
            }
          }}
        >
          {t("Reset Account")}
        </button>
      </div>

      <div className="flex items-center justify-between py-2">
        <div>
          <div>{t("Delete My Account")}</div>
          <div className="text-sm text-gray-500">
            {t("This will deactivate your account and delete your vault data and beneficiary connections. Your other account information will be retained.")}
          </div>
        </div>
        <button
          data-cy="remove-account-button"
          className="bg-red-500 hover:bg-red-700 text-white px-2 rounded-sm"
          onClick={async () => {
            const cnf = confirm(t("Are you sure you want to delete your account"));
            if (cnf) {
              await deleteAccount();
              toast.success(t("Deleted your account"));
              await sleep(2000);
              logout();
            }
          }}
        >
          {t("Delete Account")}
        </button>
      </div>

      <div className="flex items-center justify-between py-2">
        <div>
          <div>{t("Fetch all data items")}</div>
          <div className="text-sm text-gray-500">
            {t("This will fetch all data models.")}
          </div>
        </div>

        <FetchAllDataItems />
      </div>
    </div>
  );
}
