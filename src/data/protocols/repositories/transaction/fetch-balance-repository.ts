import { BalanceModel } from "@/domain/models";

export interface IFetchBalanceRepository {
  fetchBalance: () => Promise<BalanceModel>;
}
