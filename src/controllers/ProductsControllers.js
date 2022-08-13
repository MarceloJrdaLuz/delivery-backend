import Products from "../models/products"

class ProductsControllers {
    async create(req, res) {
        try {
            const {
                code,
                price,
                category,
                productName,
                description
            } = req.body
 
            if(await Products.findOne({code})){
                return res.status(400).json({error: 'Code already exists'})
            }
            if(await Products.findOne({productName})){
                return res.status(400).json({error: 'Product name already exists'})
            }
            
            const products = await Products.create({
                code,
                price,
                category,
                productName,
                description
            })
            return res.status(200).json(products)
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: "Internal server error" })
        }
    }

    async getProducts(req, res){
        const { category } = req.params
        try {
            if(category === 'Todos'){
                const products = await Products.find({})  
                return res.status(200).send(products)
            }
            const products = await Products.find({category: category})
            return res.status(200).send(products)
        } catch (error) {
            console.error(err)
            return res.status(500).json({ error: "Internal server error" })
        }
    }
    async getProduct(req, res){
        const { productName } = req.params
        try {
            const product = await Products.findOne({productName})
            if(product){
                return res.status(200).send(product)
            }
            return res.status(400).json({error: 'Product not exists'})
        } catch (error) {
            console.error(err)
            return res.status(500).json({ error: "Internal server error" })
        }
    }
}

export default new ProductsControllers()