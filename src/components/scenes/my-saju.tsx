import { SajuTable } from "../features/saju-table/saju-table";
import { UserInfoHeader } from "../features/user/user-info-header";
import sajuData from "@/lib/saju-data.json";
import { CrossDividerLayout } from "../layout/cross-divider-layout";
export function MySaju() {
  return (
    <CrossDividerLayout>
      <UserInfoHeader info={sajuData.info} />
      <SajuTable columns={sajuData.columns} rows={sajuData.rows} />
    </CrossDividerLayout>
  );
}
