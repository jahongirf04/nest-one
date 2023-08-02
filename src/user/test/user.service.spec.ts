// import { Test, TestingModule } from '@nestjs/testing';
// import { UserService } from '../user.service';
// import { userStub } from './stubs/user.stub';
// import { JwtService } from '@nestjs/jwt';
// import { RolesService } from '../../roles/roles.service';
// import { getModelToken } from '@nestjs/sequelize';
// import { User } from '../models/user.model';
// import { Role } from '../../roles/models/role.model';
// import { CreateUserDto } from '../dto/create-user.dto';


// describe('Users service', () => {
//   let userService: UserService;

//   const mockUserRespository = {
//     create: jest.fn().mockImplementation(userStub),
//     findOne: jest.fn().mockImplementation(userStub),
//     findAll: jest.fn().mockImplementation(() => [userStub]),
//     findByPk: jest.fn().mockImplementation(userStub),
//   };

//   const mockRolesRepository = {
//     findOne: jest.fn().mockImplementation((value) => 'ADMIN'),
//   };

//   beforeAll(async () => {
//     const moduleRef: TestingModule = await Test.createTestingModule({
//       imports: [],
//       providers: [UserService, JwtService, RolesService, {
//         provide: getModelToken(User),
//         useValue: mockUserRespository
//       }, {
//         provide: getModelToken(Role),
//         useValue: mockRolesRepository
//       }],
//     }).compile()

//     userService = moduleRef.get<UserService>(UserService)
//   });

//   it("should be defined", ()=> {
//     expect(userService).toBeDefined()
//   })
// });


// describe('createUser', () => {
//   describe('when createUser is called', () => {
//       let createuserDto: CreateUserDto;
//       let newUser: User;
//     //beforeEach, afterAll
//     beforeAll(async () => {
//       createuserDto = {
//         name: userStub().name,
//         email: userStub().email,
//         password: userStub().password,
//       };
//       newUser = await UserService.createUser(createuserDto);
//       console.log(newUser);
//     });
//     test('then should be create new user', async () => {
//       expect(newUser).toMatchObject({...userStub(), roles: ["ADMIN"]});
//     });
//   });
// });


// describe("getOneUser", ()=> {
//     describe("when getOneUser is called", ()=>{
//         test("then it should call usersService", async ()=> {
//             expect(await UserService.getOneUser(userStub().id)).toEqual(userStub())
//         })
//     })
// })

// describe("getAllUsers", () => {
//   describe('when getAllUsers is called', () => {
//     test('then it should call userService', async () => {
//       expect(await UserService.getAllUsers()).toEqual([userStub()]);
//     });
//   });
// });