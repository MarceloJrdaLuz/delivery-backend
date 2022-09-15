
import Delivery from "../models/delivery";

class DeliveryControllers {
    async registerValueDelivery(req, res) {
        try {
            const { neighborhood, valueDelivery } = req.body;
            if (await Delivery.findOne({ neighborhood })) {
                return res.status(400).send({ error: "Neighborhood already registered" })
            }
            const delivery = await Delivery.create({
                neighborhood, valueDelivery
            })

            return res.status(200).json(delivery)
        } catch (err) {
            console.error(err)
            return res.status(500).json({ error: "Internal server error" })
        }
    }

    async getValuesDelivery(req, res) {
        try {
            const { neighborhood } = req.params

            const getNeighborhood = await Delivery.findOne({neighborhood})

            if(getNeighborhood){
                return res.status(200).json({
                    neighborhood: getNeighborhood.neighborhood,
                    valueDelivery: getNeighborhood.valueDelivery
                })
            }
            return res.status(400).send({error: "Neighborhood is not registered"})

        } catch (error) {
            res.status(400).send({error: "Error Internal"})
        }
    }
    async getNeighborhood(req, res) {
        try {

            const getNeighborhood = await Delivery.find({})
            if(getNeighborhood){
                const neighborhoods = []
                getNeighborhood.forEach(i => {
                    neighborhoods.push(i.neighborhood) 
                })
                return res.status(200).json(neighborhoods)
            }
            return res.status(400).send({error: "No neighborhood registered"})

        } catch (error) {
            res.status(400).send({error: "Error Internal"})
        }
    }
}

export default new DeliveryControllers()