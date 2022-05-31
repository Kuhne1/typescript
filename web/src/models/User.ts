import { localhost } from "../../config";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model, ModelAttributes } from "./Model";
import { ApiSync } from "./ApiSync";
import { Collection } from "./Collection";

export interface UserProps {
    name?: string;
    age?: number;
    id?: number;
}

const rootUrl = localhost + "users";

export class User extends Model<UserProps> {
    //AUTO Constructor example
    // Constructor can be deleted as typescript can figure this out.
    constructor(
        attributes: ModelAttributes<UserProps>,
        events: Eventing,
        apisync: ApiSync<UserProps>) {
        super(attributes, events, apisync)
    }

    static buildUser(attrs: UserProps) {
        return new User(
            new Attributes(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl)
        );
    }

    static buildUserCollecton(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(rootUrl, (json: UserProps) => User.buildUser(json))
    }

    fullName() {
        return this.get("name");
    }

    isAdminUser(): boolean {
        return this.get("id") === 1
    }
}