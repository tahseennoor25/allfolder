import postData from "../services/post.js";

import post from "../services/get.js";

const get =  async (req, res) => {
try {

const data = await postData(req.body)
res.status(200).send({ status: 200, data });

}catch (err) {
    res.status(500).send({ status: 500, message: "inter server error"});
}
}
export default post;