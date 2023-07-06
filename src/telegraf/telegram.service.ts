import { Injectable } from '@nestjs/common';
import { Telegraf, Context } from 'telegraf';
import { AlgService } from './algService';

@Injectable()
export class TelegramService {
  private bot: Telegraf<Context>;

  constructor(private algService: AlgService) {
    this.bot = new Telegraf(process.env.TELEGRAM_TOKEN);
    this.registerHandlers();
    this.bot.launch();
  }

  private registerHandlers() {
    this.bot.command('start', (ctx) => this.handleStartCommand(ctx));
    this.bot.on('text', (ctx) => this.handleTextCommand(ctx));
  }

  private handleStartCommand(ctx) {
    ctx.reply(
      'Hello, I am an algorithm that takes an arbitrary text as input and finds the very first character in each word of this text that does not repeat in the analyzed word!',
    );
    ctx.reply(
      'Please, type any text and press enter to run the algorithm and get the desired letter',
    );
  }

  private async handleTextCommand(ctx) {
    const text = ctx.message.text;
    const response = await AlgService.getUnique(text);
    ctx.reply(
      response
        ? `A unique letter in this text: ${response}`
        : 'Not unique character in this text',
    );
  }
}
