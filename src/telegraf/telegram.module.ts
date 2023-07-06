import { Module } from '@nestjs/common';
import { TelegramController } from './telegram.controller';
import { TelegramService } from './telegram.service';
import { AlgService } from './algService';

@Module({
  imports: [],
  providers: [TelegramService, AlgService],
  exports: [TelegramService],
  controllers: [TelegramController],
})
export class TelegramModule {}
