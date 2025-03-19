import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Request } from "express";
import { Observable } from "rxjs";Cannot find module 'express' or its corresponding type declarations.ts(2307)

export class AuntGuard implements CanActivate{
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest<Request>();
        const isAunthenticated = request.headers['authorization'] ? true : false;
        return isAunthenticated;
    }

}