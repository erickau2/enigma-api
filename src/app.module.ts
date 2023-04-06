import { INestApplication, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from './modules/user/entities/user.entity';
import { Store } from './modules/store/entities/store.entity';
import { LoyaltyPoint } from './modules/loyalty-point/entities/loyalty-point.entity';
import { Purchase } from './modules/purchase/entities/purchase.entity';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UserModule } from './modules/user/user.module';
import { LoyaltyPointModule } from './modules/loyalty-point/loyalty-point.module';
import { StoreModule } from './modules/store/store.module';
import { PurchaseModule } from './modules/purchase/purchase.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('API_DB_HOST'),
        port: configService.get<number>('API_DB_PORT'),
        username: configService.get('API_DB_USERNAME'),
        password: configService.get('API_DB_PASSWORD'),
        database: configService.get('API_DB_NAME'),
        entities: [User, Store, LoyaltyPoint, Purchase],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UserModule,
    StoreModule,
    LoyaltyPointModule,
    PurchaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
