import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AaModule } from './aa/aa.module';

const test1 = process.env.NODE_ENV;
console.log(test1);
@Module({
  imports: [
    AaModule,
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
