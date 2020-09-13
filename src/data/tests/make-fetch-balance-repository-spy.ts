import { BalanceModel } from "@/domain/models";
import { IFetchBalanceRepository } from "../protocols/repositories";

class FetchBalanceRepositorySpy implements IFetchBalanceRepository {
  model: BalanceModel = { total: 100000000, income: 0, outcome: 0 };

  calls = 0;

  async fetchBalance(): Promise<BalanceModel> {
    this.calls += 1;

    return this.model;
  }
}

export const makeFetchBalanceRepositorySpy = () => {
  return new FetchBalanceRepositorySpy();
};
