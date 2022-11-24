const Roles = require("../models/rolesModel")

const roles = ['manager', 'client', 'livreur']

exports.setDefaultRoles = async () => {
    try {
        const count = await Roles.countDocuments()
        if(count === 0) {
            roles.forEach( async (role) => {
                const saveRole = new Roles({ role })
                await saveRole.save()
            })
        }
    } catch(err) {
           console.log(err);
    }
}