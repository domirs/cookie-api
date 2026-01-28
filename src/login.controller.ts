import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { LoginService } from './login.service';

@Controller('/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  getCookie(@Req() request: Request): string {
    console.log(request.cookies); // or "request.cookies['cookieKey']"

    return `Hello, ${request.cookies['username']}`;
  }

  @Post()
  setCookie(@Body() body: { name: string }, @Res() res: Response): void {
    res.cookie('username', 'world', {
      httpOnly: true,
      secure: true,
      sameSite: 'none',
      maxAge: 3600000,
    });
    res.send({ success: true });
  }
}
