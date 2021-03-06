import { Module } from "@nestjs/common";
import { LogsModule } from "../log/log.module";
import { UserModule } from "../users/user.module";
import { DeviceController } from "./device.controller";
import { DeviceService } from "./device.service";


@Module({
    imports: [ UserModule, LogsModule ],
    controllers: [ DeviceController],
    providers: [ DeviceService]
})
export class DeviceModule{

}