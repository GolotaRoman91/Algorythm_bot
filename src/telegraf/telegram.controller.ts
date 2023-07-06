import { Controller } from '@nestjs/common';
import { TelegramService } from './telegram.service';

@Controller('telegraf')
export class TelegramController {
  constructor(private readonly telegrafService: TelegramService) {}
}
