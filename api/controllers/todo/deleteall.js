module.exports = async function deleteAll(req, res) {
    await Todo.destroy({});
    return res.ok([]);
}