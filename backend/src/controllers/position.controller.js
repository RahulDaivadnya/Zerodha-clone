import positionModel from "../model/position.model.js";



const getPositions = async (req, res) => {

        try {
            let positions = await positionModel.find({});

            if(positions){
                res.status(200).json({
                    success: true,
                    positions
                })
            }
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }

} 


export {getPositions};