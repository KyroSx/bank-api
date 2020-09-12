import { serverError } from "@/presentation/helpers/http-helper";
import {
  IController,
  HttpRequest,
  HttpResponse,
} from "@/presentation/protocols";

export class ControllerErrorDecorator implements IController {
  constructor(private readonly controller: IController) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const httpResponse = await this.controller.handle(httpRequest);

      return httpResponse;
    } catch (error) {
      return serverError(error);
    }
  }
}
