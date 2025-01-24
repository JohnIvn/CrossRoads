import { Sequelize, Model, DataTypes } from "sequelize";

class UserModel extends Model {}

const UserAccountModel = UserModel.init({
    providerId: {
        type: DataTypes.STRING,
    },
    providerName: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING
    }
    
});

export default UserAccountModel;