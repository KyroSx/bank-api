import {
  IController,
  HttpRequest,
  HttpResponse,
} from "@/presentation/protocols";

export class ControllerErrorDecorator implements IController {
  constructor(private readonly controller: IController) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.controller.handle(httpRequest);

    const httpResponse = { statusCode: 0 };
    return httpResponse;
  }
}
