import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";
import { JwtService } from "@nestjs/jwt";



@Injectable()
export class UserSelfGuard implements CanActivate{
    constructor (private readonly jwtService: JwtService){}
    canActivate(
        context: ExecutionContext
    ): boolean |Promise<boolean> | Observable<boolean>{
        const req = context.switchToHttp().getRequest()
        console.log(1);
        
        if (String(req.user.id)!== req.params.id){
            throw new ForbiddenException({
                message: "Ruxsat etilmagan foydalanuvchi"
            })
        }
        
        return true
    }
}