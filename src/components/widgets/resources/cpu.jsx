import useSWR from "swr";
import { FiCpu } from "react-icons/fi";
import { useTranslation } from "next-i18next";

import Resource from "../widget/resource";
import Error from "../widget/error";

export default function Cpu({ expanded, refresh = 1500 }) {
  const { t } = useTranslation();

  const { data, error } = useSWR(`/admin/api/widgets/resources?type=cpu`, {
    refreshInterval: refresh,
  });

  if (error || data?.error) {
    return <Error />;
  }

  if (!data) {
    return (
      <Resource
        icon={FiCpu}
        value="-"
        label={t("resources.cpu")}
        expandedValue="-"
        expandedLabel={t("resources.load")}
        percentage="0"
        expanded={expanded}
      />
    );
  }

  return (
    <Resource
      icon={FiCpu}
      value={t("common.number", {
        value: data.cpu.usage,
        style: "unit",
        unit: "percent",
        maximumFractionDigits: 0,
      })}
      label={t("resources.cpu")}
      expandedValue={t("common.number", {
        value: data.cpu.load,
        maximumFractionDigits: 2,
      })}
      expandedLabel={t("resources.load")}
      percentage={data.cpu.usage}
      expanded={expanded}
    />
  );
}
