import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma-client/jobber-auth';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService){}

  async createUser(data: Prisma.UserCreateInput){
    const hashedPassword = await hash(data.password, 10);
    return this.prisma.user.create({ 
      data: {
        ...data, 
        password: hashedPassword,
      } 
    });
  }
}
