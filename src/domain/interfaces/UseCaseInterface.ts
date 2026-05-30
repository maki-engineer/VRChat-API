export interface UseCaseInterface {
  execute(): Promise<never[] | undefined>;
}
