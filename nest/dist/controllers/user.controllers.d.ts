import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UserController {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAllUsers(): Promise<User[]>;
    findUserById(id: any): Promise<User>;
    createUser(user: User): Promise<User>;
    updateUser(id: any, user: User): Promise<any>;
    deleteUser(id: number): Promise<void>;
}
