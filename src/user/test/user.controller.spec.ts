// import { AppModule } from "../../app.module"
// import { UserController } from "../user.controller"
// import { UserService } from "../user.service"
// import  {Test} from "@nestjs/testing"
// import { JwtService } from "@nestjs/jwt"
// import { User } from "../models/user.model"
// import { CreateUserDto } from "../dto/create-user.dto"
// import { userStub } from "./stubs/user.stub"



// jest.mock("../user.service")
// describe("Users controller", ()=>{
//     let userController: UserController
//     let userService: UserService
//     beforeAll(async ()=>{
//         const moduleRef = await Test.createTestingModule({
//             // imports: [AppModule]
//             controllers: [UserController],
//             providers: [UserService, JwtService]
//         }).compile()
//         userController = moduleRef.get<UserController>(UserController)
//         userService = moduleRef.get<UserService>(UserService)
//         jest.clearAllMocks()
//     })
//     it("should be defined userController", ()=>{
//         expect(userController).toBeDefined()
//     })
//     it("Should be difined userService", ()=>{
//         expect(userService).toBeDefined();
//     })
// })

// describe("create", ()=>{
//     describe("when create is called", ()=> {
//         let user: User
//         let createuserDto: CreateUserDto
//         //beforeEach, afterAll
//         beforeAll(async ()=> {
//             createuserDto = {
//                 name: userStub().name,
//                 email: userStub().email,
//                 password: userStub().password
//             }
//             user = await UserController.create(createuserDto)
//             console.log(user);
            
//         })
//             it("then it should call userService", ()=> {
//                 expect(UserService.createUser(createuserDto)).toHaveBeenCalledWith(createuserDto)
//             })
//             it('then it should return user', () => {
//                 expect(user).toEqual(userStub());
//             });
//     })
// })

// describe('getOne', () => {
//   describe('when getOne is called', () => {
//     let user: User;
//     //beforeEach, afterAll
//     beforeEach(async () => {
//       user = await UserController.getOne(userStub().id)
//     });
//       it('then it should call userService', () => {
//           expect(UserService.getOneUser).toBeCalledWith(userStub().id);
//         });
//         it('then it should return user', () => {
//             expect(user).toEqual(userStub());
//         });
//     });
// });

// describe('getAllUsers', () => {
//   describe('when getAllUsers is called', () => {
//     let users: User[];
//     //beforeEach, afterAll
//     beforeEach(async () => {
//       users = await UserController.getAllUsers();
//     });
//     it('then it should call userService', () => {
//       expect(UserService.getAllUsers).toBeCalled();
//     });
//     it('then it should return user', () => {
//       expect(users).toEqual(userStub());
//     });
//   });
// });

// describe('deleteUser', () => {
//   describe('when getAllUsers is called', () => {
//     let users: User[];
//     //beforeEach, afterAll
//     beforeEach(async () => {
//       users = await UserController.getAllUsers();
//     });
//     it('then it should call userService', () => {
//       expect(UserService.getAllUsers).toBeCalled();
//     });
//     it('then it should return user', () => {
//       expect(users).toEqual(userStub());
//     });
//   });
// });