const model = require("../models/index")

exports.index = (req, res, next) => {
    res.send('customers');
  }
 
  exports.show = async (req, res, next) => {
 
        const data = await model.customers.findAll()

        res.status(200).json({
            data: data
        })
 
  }

  exports.insert = async (req, res, next) => {
 
    const { c_name, c_lastname, c_email, c_tel, c_num, c_mu, c_tanon, c_tumboo, c_soi, c_amphor, c_jungwan, c_sex } = req.body;

    const check = await model.customers.create({
        c_name, c_lastname, c_email, c_tel, c_num, c_mu, c_tanon, c_tumboo, c_soi, c_amphor, c_jungwan, c_sex})
    res.status(201).json({
        message: check
    });
}

exports.destroy = async (req, res, next) => {
 
    const { id } = req.params;

    const check = await model.customers.destroy({

            where: {
                id: id
            }

    }) 
    res.status(200).json({
        message: check
    });
}

exports.update = async (req, res, next) => {
 
    const { id, c_name, c_lastname, c_email, c_tel, c_num, c_mu, c_tanon, c_tumboo, c_soi, c_amphor, c_jungwan, c_sex } = req.body;

    const check = await model.customers.update({
      id,  c_name, c_lastname, c_email, c_tel, c_num, c_mu, c_tanon, c_tumboo, c_soi, c_amphor, c_jungwan
    },
    {
        where: {
            id: id
        }
    })

    res.status(201).json({
        message: check
    });
}