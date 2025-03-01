import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "./models/user.model";
import { UsersService } from "./users.service";
import { CreateUserInput } from "./dto/create-input.input";

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService){}

  @Query(() => [User], {name: 'users'})
  async getUsers(){
    return [];
  }
  
  @Mutation(() => User, {name: 'createUser'})
  async createUser(@Args('createUserInput') input: CreateUserInput){
    return this.usersService.createUser(input)
  }
}