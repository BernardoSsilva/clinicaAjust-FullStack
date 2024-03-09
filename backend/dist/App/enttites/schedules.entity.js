"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleEntity = void 0;
const entity_1 = require("../../shared/entity");
class ScheduleEntity extends entity_1.Entity {
    get scheduleDate() {
        return this.scheduleDate;
    }
    get authorId() {
        return this.authorId;
    }
    set client(value) {
        this.client = value;
    }
    get client() {
        return this.client;
    }
}
exports.ScheduleEntity = ScheduleEntity;
//# sourceMappingURL=schedules.entity.js.map