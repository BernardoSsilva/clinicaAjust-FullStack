export interface RepositoryContract<Entity> {
    getAll(): Promise<[]>;
    findById(id: string): Promise<Entity>;
    insert(values: any): Promise<void>;
    delete(id: string): Promise<void>;
    update(id: string, values: any): Promise<void>;
}
