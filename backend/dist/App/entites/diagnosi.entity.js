"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiagnosisEntity = void 0;
const entity_1 = require("../../shared/entity");
class DiagnosisEntity extends entity_1.Entity {
    get authorId() {
        return this.props.authorId;
    }
    get createdAt() {
        return this.props.createdAt;
    }
    get description() {
        return this.props.description;
    }
    set description(value) {
        this.description = value;
    }
    get client() {
        return this.props.client;
    }
    set client(value) {
        this.props.client = value;
    }
    get title() {
        return this.props.title;
    }
    set title(value) {
        this.props.title = value;
    }
    constructor(props) {
        super(props);
        this.validate();
    }
    async validate() {
        const errors = [];
        const authorIdErrors = this.validateAuthorId(this.authorId);
        const clientErrors = this.validateClient(this.client);
        const titleErrors = this.validateTitle(this.title);
        const createDateErrors = this.validateCreatedDate(this.createdAt);
        const descriptionErrors = this.validateDescription(this.description);
        if (authorIdErrors)
            errors.push(authorIdErrors);
        if (clientErrors)
            errors.push(clientErrors);
        if (titleErrors)
            errors.push(titleErrors);
        if (createDateErrors)
            errors.push(createDateErrors);
        if (descriptionErrors)
            errors.push(descriptionErrors);
        return errors;
    }
    validateAuthorId(authorId) {
        if (!authorId)
            return 'author id is required';
        if (typeof authorId !== 'string')
            return 'the author id must be a instance of string';
        return null;
    }
    validateClient(client) {
        if (!client)
            return 'client is required';
        if (typeof client !== 'string')
            return 'client must be a instance of string';
        if (client.length == 0)
            return 'client name must have a length bigger than 0';
        return null;
    }
    validateTitle(title) {
        if (!title)
            return 'title is required';
        if (title.length == 0)
            return 'title must have a length bigger than 0';
        if (typeof title !== 'string')
            return 'title must be a instance of string';
        return null;
    }
    validateCreatedDate(createdDate) {
        if (!createdDate)
            return 'creation date is required';
        if (createdDate instanceof Date)
            return 'creation date must be a instance of date';
        return null;
    }
    validateDescription(description) {
        if (!description)
            return 'description is required';
        if (typeof description !== 'string')
            return 'description must be a string';
        if (description.length == 0)
            return 'description must be have length bigger than 0';
        return null;
    }
}
exports.DiagnosisEntity = DiagnosisEntity;
//# sourceMappingURL=diagnosi.entity.js.map