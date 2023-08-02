import { INestApplication, ValidationPipe } from "@nestjs/common"
import { Test, TestingModule } from "@nestjs/testing"
import { AppModule } from "../src/app.module"
import * as request from "supertest"
import { response } from "express"


describe("User (e2e)", ()=> {
    let app: INestApplication
    let token: String
    beforeAll(async ()=> {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule]
        }).compile()

        app = moduleFixture.createNestApplication()
        app.useGlobalPipes(new ValidationPipe())
        await app.init()

        const response = await request(app.getHttpServer())
          .post('/auth/login')
          .send({
            email: 'user111@mail.uz',
            password: '12345678jJ.',
          });
        token = response.body.token
        console.log(token);
        
    })
    it('/user (GET) --> 200 "OK"', ()=> {
        return request(app.getHttpServer())
          .get('/user')
          .set('Authorization', `Bearer ${token}`)
          .expect('Content-Type', /json/)
          .expect(200);
    })

    it('/user (GET) --> 401 "Unauthorized" error', () => {
      return request(app.getHttpServer())
        .get('/user')
        // .set('Authorization', `Bearer ${token}`)
        .expect('Content-Type', /json/)
        .expect(401);
    });

    // it("/auth/registration (POST) --> 201", () => {
    //   return request(app.getHttpServer())
    //   .post("/auth/registration")
    //   .send({
    //     name: "user111@mail.uz",
    //     email: "user113@mail.uz",
    //     password: "12345678Jj."
    //   })
    //   .expect("Content-Type", /json/)
    //   .expect(201)
    //   .then((response)=> {
    //     expect(response.body).toMatchObject({
    //       token: expect.any(String)
    //     })
    //   })
    // })

    it("/auth/registration (POST) --> 400", () => {
      return request(app.getHttpServer())
      .post("/auth/registration")
      .send({
        name: "user111@mail.uz",
        email: "user113@mail.uz",
        password: "12345678Jj."
      })
      .expect("Content-Type", /json/)
      .expect(400)
      .expect({
        statusCode: 400,
        message: 'Bunday foydalanuvchi mavjud'
      })
    })

    it('/user/1 (GET) --> 200 OK', () => {
      return request(app.getHttpServer())
        .get('/user/7')
        .send({
          id: 7,
        })
        .set('Authorization', `Bearer ${token}`)
        .expect('Content-Type', /json/)
        .expect(200)
        // .expect({
        //   id: 7,
        //   name: 'user1',
        //   email: 'user111@mail.uz',
        //   password:
        //     '$2b$07$Ir8kqNxmbIkjwdm1yCht2OPqfZ4rbGD15VMN6zr2xdBnFs6gn5DKi',
        //   is_active: false,
        //   createdAt: '2023-07-28T05:15:41.079Z',
        //   updatedAt: '2023-07-28T05:15:41.079Z',
        //   roles: [
        //     {
        //       id: 1,
        //       value: 'ADMIN',
        //       description: 'Yaxshi admin',
        //       createdAt: '2023-07-20T05:16:12.439Z',
        //       updatedAt: '2023-07-20T05:16:12.439Z',
        //       UserRoles: {
        //         id: 6,
        //         userId: 7,
        //         roleId: 1,
        //       },
        //     },
        //   ],
        //   posts: [],
        // });
    });

    afterAll(async ()=> {
    await app.close()
  })
})