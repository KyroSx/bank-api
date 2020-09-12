import { HttpResponse } from "@/presentation/protocols/http";
import { ServerError } from "../errors";

export const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error,
});

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack),
});
