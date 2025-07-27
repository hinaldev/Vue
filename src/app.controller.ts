import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('users')
export class AppController {
  @Get()
  getUsers() {
    return [
      { id: 1, name: 'פערי אולבסקי', email: 'Pery@Olevsky.com' },
      { id: 2, name: 'כבי וגשל', email: ' Chevy@Wagshal.com' },
      { id: 3, name: 'טובי אטלס', email: 'Toby@Atlas.com' },
      { id: 4, name: 'חני קרול', email: 'Chany@Krool.com' },
      { id: 5, name: 'הינדי אלברט', email: 'Hindy@Albert.com' },      
      ];
  }
}
