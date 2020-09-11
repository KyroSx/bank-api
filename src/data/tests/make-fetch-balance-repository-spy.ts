import { BalanceModel } from "@/domain/models";
import { IFetchBalanceRepository } from "../protocols/repositories/fetch-balance-repository";

class FetchBalanceRepositorySpy implements IFetchBalanceRepository {
  model: BalanceModel;

  calls = 0;

  async fetchBalance(): Promise<BalanceModel> {
    this.calls += 1;

    return this.model;
  }
}

export const makeFetchBalanceRepositorySpy = () => {
  return new FetchBalanceRepositorySpy();
};
