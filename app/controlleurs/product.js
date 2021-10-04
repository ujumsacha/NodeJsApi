const db = require("../models");
const ProductTable = db.Product;


module.exports={


async findAll (req, res){
  try{
    const productlist=await ProductTable.findAll();
    res.status(201).send({products:productlist});
  }
  catch(e)
  {
    console.log(e);
    res.status(500).send(e);
  }
},


async findone (req ,res)
{
  const identifiant=req.params.id;
  try{
    const produit=await ProductTable.findAll({ where :{
      id:identifiant} 
    });
      res.status(201).send({product:produit});
  }
  catch(e)
  {
    res.status(500).send(e)
  }
},


async delete (req ,res)
{
  try{
    const idpar= req.params.id;
    constestdelete= await ProductTable.destroy({where: { id: idpar }});
    if(constestdelete==1)
    {
      res.status(201).send({message: 'Deleted!'});
    }
    res.status(400).send({message: 'Id inexistant!'});
  }
  catch(e)
  {
    res.status(500).send(e)
  }
},
async create (req ,res)
{
  if (!req.body.name || !req.body.description || !req.body.price ||req.body.inStock==null ) {
    res.status(400).send({
      message: "Veuillez renseigner tous les champs SVP!"
    });
    return;
  }

  
  const product = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    inStock: req.body.inStock ? req.body.inStock : false
  };
  try{
    await ProductTable.create(product);
    res.status(201).send({message :'Saved' });
  }
  catch(e)
  {
    res.status(500).send(e)
  }
},


async update (req ,res)
{
  if (!req.body.name || !req.body.description || !req.body.price ||req.body.inStock==null ) {
    res.status(400).send({
      message: "Veuillez renseigner tous les champs SVP!"
    });
    return;
  }

  
  const monid = req.params.id;
  try{
    await ProductTable.update(req.body,{where:{id:monid}})
    res.status(201).send({message:'Modified!'})
  }
  catch(e)
  {
    console.log(e);
    res.status(500).send(e);
  }
},
};