import { SajuTable } from "../features/saju-table";
import { UserInfoHeader } from "../features/user/user-info-header";
import { CrossDividerLayout } from "../layout/cross-divider-layout";
interface MySajuProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  sajuData: any;
}
export function MySaju({ sajuData }: MySajuProps) {
  return (
    <CrossDividerLayout>
      <UserInfoHeader info={sajuData.info} />
      <SajuTable columns={sajuData.columns} rows={sajuData.rows} />
    </CrossDividerLayout>
  );
}
