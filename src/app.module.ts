import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './modules/products.module';
import { MongooseModule } from '@nestjs/mongoose';
const options = {
  user: 'peepo',
  pass: 'myMongoDB',
  useNewUrlParser: true,
  useFindAndModify: false,
};

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest', options),
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
