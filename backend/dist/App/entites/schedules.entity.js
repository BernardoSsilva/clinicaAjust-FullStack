"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleEntity = void 0;
const entity_1 = require("../../shared/entity");
class ScheduleEntity extends entity_1.Entity {
    get scheduleDate() {
        return this.props.scheduleDate;
    }
    get authorId() {
        return this.props.authorId;
    }
    set client(value) {
        this.client = value;
    }
    get client() {
        return this.props.client;
    }
    constructor(props) {
        super(props);
        this.validate();
    }
    async validate() {
        const errors = [];
        const authorIdErrors = this.validateAuthorId(this.authorId);
        const clientErrors = this.validateClient(this.client);
        if (authorIdErrors)
            errors.push(authorIdErrors);
        if (clientErrors)
            errors.push(clientErrors);
        return errors;
    }
    validateAuthorId(authorId) {
        if (!authorId)
            return 'O id do autor é requirido';
        if (typeof authorId !== 'string')
            return 'O id do autor deve ser formada por texto';
        return null;
    }
    validateClient(client) {
        if (!client)
            return 'O cliente é requirido';
        if (typeof client !== 'string')
            return 'O nome do cliente deve ser formado por texto';
        return null;
    }
}
exports.ScheduleEntity = ScheduleEntity;
//# sourceMappingURL=schedules.entity.js.map