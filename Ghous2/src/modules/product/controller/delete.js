import deleteData from "../services/delete.js";

const deleteController = async (req, res) => {
    try {
        const { id } = req.params;
        await deleteData(id)
        res.status(200).send({ status: 200, message: DELETE_DATA_MESSAGE});

    }catch (error){
     res.status(500).send({ status: 500, message: INTER_SERVICE_ERROR_MESSAGE});
    }
}

export default deleteController;