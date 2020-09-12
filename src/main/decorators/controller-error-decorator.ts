import {
  IController,
  HttpRequest,
  HttpResponse,
} from "@/presentation/protocols";

export class ControllerErrorDecorator implements IController {
  constructor(private readonly controller: IController) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(httpRequest);

    return httpResponse;
  }
}
