import updateData from "../services/update.js";

const updateController = async (req, res) => {
    try {
        const { id } = req.params;
        await updateData(id, req.body)
        res.status(200).send({ status: 200, message: POST_DATA_MESSAGE });

    }catch (error){
     res.status(500).send({ status: 500, message:  INTER_SERVICE_ERROR_MESSAGE});
    }
}

export default updateController;