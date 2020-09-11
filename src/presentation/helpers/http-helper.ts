import { HttpResponse } from "@/presentation/protocols/http";

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
