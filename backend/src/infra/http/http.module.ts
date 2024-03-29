import { Module } from '@nestjs/common';
import { UpdateUserController } from './user/update.user.controller';
import { DeleteUserController } from './user/delete.user.controller';
import { FindAllUsersController } from './user/find.all.user.controller';
import { FindUniqueUserController } from './user/find.unique.user.controller';
import { FindUserByEmailController } from './user/find.user.by.email.controller';
import { CreateScheduleController } from './schedules/create.schedule.controller';
import { DeleteScheduleController } from './schedules/delete.schedule.controller';
import { FindScheduleByIdController } from './schedules/find.schedule.by.id.controller';
import { GetAllSchedulesController } from './schedules/get.all.schedules.controller';
import { UpdateScheduleController } from './schedules/update.schedule.controller';
import { CreateUserController } from './user/create.user.controller';

@Module({
  controllers: [
    UpdateUserController,
    FindUserByEmailController,
    FindUniqueUserController,
    FindAllUsersController,
    DeleteUserController,
    CreateUserController,
    UpdateScheduleController,
    GetAllSchedulesController,
    FindScheduleByIdController,
    DeleteScheduleController,
    CreateScheduleController,
  ],
  providers: [],
  exports: [],
})
export class HttpModule {}
