  const Product = require("../controlleurs/product.js");

  var router = require("express").Router();
    module.exports = app => {
      app.get("/api", (req, res) => {
        res.status(200).send({
          data: "Bienvenu sur l'api v1 des produits",
        })
      })
    
 
    router.get("/", Product.findAll)
    router.get("/:id", Product.findone)
    router.post("/", Product.create)
    router.put("/:id", Product.update)
    router.delete("/:id", Product.delete) 
    app.use('/api/products', router);
  }