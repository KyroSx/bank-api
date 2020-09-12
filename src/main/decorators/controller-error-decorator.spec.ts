import { mockTransactionModel } from "@/domain/tests";
import { success } from "@/presentation/helpers/http-helper";
import {
  HttpRequest,
  HttpResponse,
  IController,
} from "@/presentation/protocols";
import { ControllerErrorDecorator } from "./controller-error-decorator";

class ControllerSpy implements IController {
  httpResponse = success(mockTransactionModel());

  httpRequest: HttpRequest;

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    this.httpRequest = httpRequest;
    return this.httpResponse;
  }
}

const makeSut = () => {
  const controllerSpy = new ControllerSpy();
  const sut = new ControllerErrorDecorator(controllerSpy);

  return { sut, controllerSpy };
};

const mockRequest = () => ({ body: null });

describe("Controller Error Decorator (Main)", () => {
  it("should call controller-decoratee.handle", async () => {
    const { sut, controllerSpy } = makeSut();
    const httpRequest = mockRequest();
    await sut.handle(httpRequest);
    expect(controllerSpy.httpRequest).toEqual(httpRequest);
  });
});
