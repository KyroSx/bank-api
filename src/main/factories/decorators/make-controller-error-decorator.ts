import { ControllerErrorDecorator } from "@/main/decorators/controller-error-decorator";
import { IController } from "@/presentation/protocols";

export const makeControllerErrorDecorator = (
  controller: IController,
): ControllerErrorDecorator => {
  return new ControllerErrorDecorator(controller);
};
