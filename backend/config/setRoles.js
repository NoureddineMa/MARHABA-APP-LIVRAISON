const Roles = require("../models/rolesModel")

const roles = ['livreur', 'manager', 'client']

exports.setDefaultRoles = () => {
    try {
        roles.forEach((role) => {
            const saveRole = new Roles({ role })
            saveRole.save()
        })
    } catch(err) {
        next({
            error: true,
            status: 400, 
            message: "something went wrong " + err
        })
    }
}